import React from 'react';
import PlayerCard from './playerCard';

const PlayersList = (props) => {
    const { players } = props;
    return(
        <div className="playersBox">
            {players.map(item => <PlayerCard player={item} key={item.id}/>)}
        </div>
    )
}

export default PlayersList;
