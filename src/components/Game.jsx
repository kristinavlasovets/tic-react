import React, {useState} from 'react';
import {Typography} from '@mui/material';
import {Board} from './Board';

export const Game = ({channel, handleLogout}) => {
	const [playersJoined, setPlayersJoined] = useState(
		channel.state.watcher_count === 2
	);

	const [result, setResult] = useState({winner: 'none', state: 'none'});

	channel.on('user.watching.start', (event) => {
		setPlayersJoined(event.watcher_count === 2);
	});
	channel.on('user.watching.stop', (event) => {
		setPlayersJoined(event.watcher_count === 2);
	});

	if (!playersJoined) {
		return (
			<Typography
				sx={{
					m: '5vh auto',
				}}
				variant="h2"
			>
				looking for a victim for you
			</Typography>
		);
	}

	return (
		<Board result={result} setResult={setResult} handleLogout={handleLogout} />
	);
};
