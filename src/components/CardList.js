import React from 'react';
import Card from './Card';

const CardList = ({Robots}) => {
    if (false) {
        throw new Error('Meh...');
    }

    return (
    <div>
       {
        Robots.map(robot => {
        return (
                <Card 
                    id={robot.id} 
                    name={robot.name} 
                    username={robot.username} 
                    email={robot.email}/>
                );
            })
        }
    </div>
    );
}

export default CardList;
