import React from 'react';
import {Box} from '@mui/material';
import {LoginForm} from '../components/LoginForm';

export const Login = ({setIsAuth, client}) => {
	return (
		<Box>
			<LoginForm setIsAuth={setIsAuth} client={client} />
		</Box>
	);
};
