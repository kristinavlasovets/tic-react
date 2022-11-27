import React, {useState} from 'react';

export const Game = ({channel}) => {
	const [playersJoined, setPlayersJoined] = useState(
		channel.state.watcher_count === 2
	);
	return <div>Game</div>;
};
