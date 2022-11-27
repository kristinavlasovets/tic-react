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
					padding: 10,
					display: 'flex',
					justifyContent: 'center',
					color: 'white',
					backgroundImage: `url(${'https://cdn.dribbble.com/userupload/2840552/file/original-de1436c9f5525da0e592393bab04aade.png?compress=1&resize=1600x1200'})`,
				}}
				variant="h2"
			>
				choose your
				<Box sx={{color: 'red', m: '15px'}} component="span">
					victim
				</Box>
			</Typography>
			<TextField
				sx={{m: '5vh auto', width: '200px'}}
				label="My opponent"
				variant="outlined"
				onChange={(e) => setOpponent(e.target.value)}
				color="error"
			/>
			<Button
				sx={{m: '5vh auto', width: 200, height: 50, fontSize: '24px'}}
				variant="contained"
				onClick={createChannel}
				color="error"
			>
				Kill
			</Button>
		</Box>
	);
};
