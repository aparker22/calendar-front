import React from 'react';
import {addEventToDatabase} from './helperFunctions/fetches';

let EventSquare = ({day, event}) => {
    return <li onClick={() => addEventToDatabase()}>
        <p>{day}</p>
        <p>{event.description}</p>
    </li>
}

export default EventSquare;