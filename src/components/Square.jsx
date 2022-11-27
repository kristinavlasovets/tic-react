import React from 'react';
import {Box} from '@mui/material';

export const Square = ({chooseSquare, value}) => {
	return (
		<Box
			onClick={chooseSquare}
			sx={{
				fontSize: 200,
				fontWeight: 'light',
				fontFamily: 'default',
				lineHeight: '160px',
				width: 200,
				height: 200,
				color: 'black',
				textAlign: 'center',
				backgroundColor: 'whitesmoke',
				border: '2px solid white',
				cursor: 'pointer',
			}}
		>
			{value}
		</Box>
	);
};
