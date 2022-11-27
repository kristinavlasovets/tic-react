import React from 'react';
import {Box, Typography} from '@mui/material';
import {LoginForm} from '../components/LoginForm';

export const Login = ({setIsAuth, client}) => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
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
				are you ready to play?
			</Typography>
			<LoginForm setIsAuth={setIsAuth} client={client} />
		</Box>
	);
};
