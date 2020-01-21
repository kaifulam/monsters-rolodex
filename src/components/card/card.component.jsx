import React from 'react';
import './card.styles.css';

class MonsterCard extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className='card-container'>
                <img alt='monster' src={'https://robohash.org/' + this.props.monster.id + '1?set=set2&size=180x180'} />
                <h1>{this.props.monster.name}</h1>
                <p>{this.props.monster.email}</p>
            </div>
        )
    }

}

export default MonsterCard;