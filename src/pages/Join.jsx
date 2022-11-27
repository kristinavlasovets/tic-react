import React from 'react';
import {Chat} from 'stream-chat-react';
import {Box, Button} from '@mui/material';
import {JoinGame} from '../components/JoinGame';

export const Join = ({setIsAuth, client, user}) => {
	const handleLogout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('username');
		setIsAuth(false);
		client.disconnectUser();
	};
	return (
		<Box>
			<Chat client={client}>
				<Button
					sx={{m: '20px 20px', width: 100}}
					type="button"
					variant="contained"
					onClick={handleLogout}
					color="error"
				>
					Logout
				</Button>

				<JoinGame user={user} handleLogout={handleLogout} />
			</Chat>
		</Box>
	);
};
