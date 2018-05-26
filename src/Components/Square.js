import React from 'react';
import {addEventToDatabase} from './helperFunctions/fetches';

let Square = ({day}) => <li onClick={() => addEventToDatabase()}><span>{day}</span></li>

export default Square;