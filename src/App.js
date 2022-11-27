import React, {useState, useEffect} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {StreamChat} from 'stream-chat';
import {Join} from './pages/Join';
import {Login} from './pages/Login';

export const App = () => {
	const [isAuth, setIsAuth] = useState(false);
	const [user, setUser] = useState({});
	const api_key = 'yzj9x3mf6vkv';
	const client = StreamChat.getInstance(api_key);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsAuth(true);
		} else {
			setIsAuth(false);
		}
	}, [isAuth, user]);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			client
				.connectUser(
					{
						id: localStorage.getItem('userId'),
						name: localStorage.getItem('username'),
					},
					localStorage.getItem('token')
				)
				.then((user) => {
					setUser(user);
				});
		}
	}, [user, isAuth]);

	return isAuth ? (
		<Routes>
			<Route
				path="/"
				element={<Join setIsAuth={setIsAuth} client={client} user={user} />}
			/>
			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	) : (
		<Routes>
			<Route
				path="/login"
				element={<Login setIsAuth={setIsAuth} client={client} />}
			/>
			<Route path="/*" element={<Navigate to="/login" />} />
		</Routes>
	);
};
