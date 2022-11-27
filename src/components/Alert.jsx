import * as React from 'react';
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

export default function Alert({
	winner,
	open,
	handleClose,
	setBoard,
	handleLogout,
}) {
	const handleRestart = () => {
		setBoard(['', '', '', '', '', '', '', '', '']);
		handleClose();
	};
	return (
		<Dialog
			sx={{
				padding: 30,
				display: 'flex',
				justifyContent: 'center',
				backgroundImage: `url(${'https://cdn.dribbble.com/userupload/2840552/file/original-de1436c9f5525da0e592393bab04aade.png?compress=1&resize=1600x1200'})`,
			}}
			open={open}
			onClose={handleClose}
		>
			<DialogTitle sx={{width: '800px', fontSize: '32px'}}>
				{'are you ready for the rematch?'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText sx={{fontSize: '32px'}}>
					the{' '}
					<Box sx={{color: 'red'}} component="span">
						winner
					</Box>{' '}
					is {winner}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button sx={{color: 'gray'}} onClick={handleLogout}>
					No way
				</Button>
				<Button color="error" onClick={handleRestart} autoFocus>
					I can do it!
				</Button>
			</DialogActions>
		</Dialog>
	);
}
