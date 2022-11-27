import React, {useState} from 'react';
import {Box, TextField, Button} from '@mui/material';

export const LoginForm = ({setIsAuth}) => {
	const [username, setUsername] = useState('');

	const handleStart = async (e) => {
		e.preventDefault();
		const response = await fetch('http://localhost:3001/signin', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({username}),
		});
		const result = await response.json();
		setIsAuth(true);
		localStorage.setItem('token', result.token);
		localStorage.setItem('userId', result.userId);
		localStorage.setItem('username', result.username);
	};

	return (
		<Box
			sx={{
				m: '20vh auto',
				width: 500,
				display: 'flex',
				flexDirection: 'column',
			}}
			component="form"
			onSubmit={handleStart}
		>
			<TextField
				sx={{m: '0 auto', width: 200}}
				onChange={(event) => setUsername(event.target.value)}
				value={username}
				label="Your name"
				variant="outlined"
			/>
			<Button
				sx={{m: '20px auto', width: 100}}
				type="submit"
				variant="contained"
			>
				Start
			</Button>
		</Box>
	);
};
