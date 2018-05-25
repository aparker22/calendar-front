import React from 'react';
import {addEventToDatabase} from './helperFunctions/fetches';

let Square = ({day}) => <li onClick={() => addEventToDatabase()}><p>{day}</p></li>

export default Square;