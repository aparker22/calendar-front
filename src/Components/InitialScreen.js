import React from 'react';
import MonthGrid from './MonthGrid.js';

let InitialScreen = () => {
    let leftArrow = '<';
    let rightArrow = '>';
    return( 
    <div className="initial-container">
        <div className="initial-month">
            <h1>May</h1>
            <div>
                <button>{leftArrow}</button>Today<button>{rightArrow}</button>
            </div>
        </div>
        <div className="days-list">
            <h3>Sun</h3>
            <h3>Mon</h3>
            <h3>Tue</h3>
            <h3>Wed</h3>
            <h3>Thu</h3>
            <h3>Fri</h3>
            <h3>Sat</h3>
        </div>
        <MonthGrid />
    </div>
)}

        

export default InitialScreen;