import React from 'react';
import {addEventToDatabase} from './helperFunctions/fetches';

let EventSquare = ({day, event}) => {
    return <li onClick={() => addEventToDatabase()}>
        <span>{day}</span>
        <p>{event.description}</p>
    </li>
}

export default EventSquare;