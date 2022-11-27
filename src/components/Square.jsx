import React from 'react';
import {Box} from '@mui/material';

export const Square = ({chooseSquare, value}) => {
	return (
		<Box
			onClick={chooseSquare}
			sx={{
				fontSize: 50,
				width: 200,
				height: 200,
				color: 'thistle',
				backgroundColor: 'whitesmoke',
				border: '2px solid white',
				cursor: 'pointer',
			}}
		>
			{value}
		</Box>
	);
};
