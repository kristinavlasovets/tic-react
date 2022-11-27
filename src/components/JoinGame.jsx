import React, {useState} from 'react';
import {useChatContext, Channel} from 'stream-chat-react';
import {Box, Typography, TextField, Button} from '@mui/material';
import {Game} from './Game';

export const JoinGame = ({handleLogout}) => {
	const [opponent, setOpponent] = useState('');
	const [channel, setChannel] = useState(null);

	const {client} = useChatContext();

	const createChannel = async () => {
		const response = await client.queryUsers({name: {$eq: opponent}});

		if (response.users.length === 0) {
			alert('User not found');
			return;
		}
		const newChannel = await client.channel('messaging', {
			members: [client.userID, response.users[0].id],
		});

		await newChannel.watch();
		setChannel(newChannel);
	};

	return channel ? (
		<Channel channel={channel}>
			<Game channel={channel} handleLogout={handleLogout} />
		</Channel>
	) : (
		<Box
			sx={{
				m: '0 auto',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography
				sx={{
					m: '5vh auto',
				}}
				variant="h2"
			>
				choose your victim
			</Typography>
			<TextField
				sx={{m: '0 auto', width: '200px'}}
				label="My opponent"
				variant="outlined"
				onChange={(e) => setOpponent(e.target.value)}
			/>
			<Button
				sx={{m: '5vh auto', width: 200, height: 50, fontSize: '24px'}}
				variant="contained"
				onClick={createChannel}
			>
				Kill
			</Button>
		</Box>
	);
};
