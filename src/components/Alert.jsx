import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Alert({
	winner,
	open,
	handleClose,
	setBoard,
	handleLogout,
}) {
	const handleRestart = () => {
		setBoard(['', '', '', '', '', '', '', '', '']);
		handleClose();
	};
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{'Do you want to play once again lox?'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText>The winner is {winner}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleLogout}>Nah, i leave</Button>
				<Button onClick={handleRestart} autoFocus>
					Yes, i kill u
				</Button>
			</DialogActions>
		</Dialog>
	);
}
