import React from 'react';
import {addEventToDatabase} from '../helperFunctions/fetches';

let fun = (event) => {
    if (event.length > 0 ) {
        return event.map((element) =>{
            return <p>{element.description}</p>
        })
        } else {
        return null;
    }
}

let EventSquare = ({date, highlightedDate}) => {
    console.log(highlightedDate)
    if (date.day === highlightedDate) {
        return <li className="highlight" onClick={() => addEventToDatabase()}>
                <span>{date.day}</span>
                <div>{
                fun(date.event) 
            }</div>
            </li>
    } else {
    return <li onClick={() => addEventToDatabase()}>
        <span>{date.day}</span>
        <div>{
           fun(date.event) 
    }</div>
    </li>
    }
}

export default EventSquare;