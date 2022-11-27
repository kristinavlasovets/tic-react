import React, {useEffect, useState} from 'react';
import {useChannelStateContext, useChatContext} from 'stream-chat-react';
import {Box} from '@mui/material';
import {Square} from './Square';
import {Patterns} from '../WinningPatterns';
import Alert from './Alert';

export const Board = ({result, setResult, handleLogout}) => {
	const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
	const [player, setPlayer] = useState('x');
	const [turn, setTurn] = useState('x');
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const {channel} = useChannelStateContext();
	const {client} = useChatContext();

	useEffect(() => {
		checkIfTie();
		checkWin();
	}, [board]);

	const chooseSquare = async (square) => {
		if (turn === player && board[square] === '') {
			setTurn(player === 'x' ? 'o' : 'x');

			await channel.sendEvent({
				type: 'game-move',
				data: {square: square, player},
			});
			setBoard(
				board.map((val, i) => {
					if (i === square && val === '') {
						return player;
					}
					return val;
				})
			);
		}
	};

	const checkWin = () => {
		Patterns.forEach((currPattern) => {
			const firstPlayer = board[currPattern[0]];
			if (firstPlayer === '') return;
			let foundWinningPattern = true;

			currPattern.forEach((i) => {
				if (board[i] !== firstPlayer) {
					foundWinningPattern = false;
				}
			});

			if (foundWinningPattern) {
				setResult({winner: board[currPattern[0]], state: 'Won'});
				handleClickOpen();
			}
		});
	};

	const checkIfTie = () => {
		let filled = true;
		board.forEach((square) => {
			if (square === '') {
				filled = false;
			}
		});

		if (filled) {
			setResult({winner: 'none', state: 'tie'});
			handleClickOpen();
		}
	};

	channel.on((event) => {
		if (event.type === 'game-move' && event.user.id !== client.userID) {
			const currentPlayer = event.data.player === 'x' ? 'o' : 'x';
			setPlayer(currentPlayer);
			setTurn(currentPlayer);
			setBoard(
				board.map((val, i) => {
					if (i === event.data.square && val === '') {
						return event.data.player;
					}
					return val;
				})
			);
		}
	});
	return (
		<Box
			sx={{
				m: '10vh auto',
				width: 600,
			}}
		>
			<Alert
				winner={result.winner}
				open={open}
				handleClose={handleClose}
				setBoard={setBoard}
				handleLogout={handleLogout}
			/>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				<Square
					chooseSquare={() => {
						chooseSquare(0);
					}}
					value={board[0]}
				/>
				<Square
					chooseSquare={() => {
						chooseSquare(1);
					}}
					value={board[1]}
				/>
				<Square
					chooseSquare={() => {
						chooseSquare(2);
					}}
					value={board[2]}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				<Square
					chooseSquare={() => {
						chooseSquare(3);
					}}
					value={board[3]}
				/>
				<Square
					chooseSquare={() => {
						chooseSquare(4);
					}}
					value={board[4]}
				/>
				<Square
					chooseSquare={() => {
						chooseSquare(5);
					}}
					value={board[5]}
				/>
			</Box>
			<Box
				sx={{
					display: 'flex',
				}}
			>
				<Square
					chooseSquare={() => {
						chooseSquare(6);
					}}
					value={board[6]}
				/>
				<Square
					chooseSquare={() => {
						chooseSquare(7);
					}}
					value={board[7]}
				/>
				<Square
					chooseSquare={() => {
						chooseSquare(8);
					}}
					value={board[8]}
				/>
			</Box>
		</Box>
	);
};
