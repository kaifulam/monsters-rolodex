import React from 'react';
import './card-list.styles.css';

import MonsterCard from '../card/card.component';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => <MonsterCard key={monster.id} monster={monster} />)}
        </div>
    )
}