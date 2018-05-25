import React from 'react';
import ActionButtons from './ActionButtons';
import CalendarComponent from './CalendarComponent';
import AddEventComponent from './AddEventComponent';

let ActionComponents = () => 
    <div className="header-left">
        <ActionButtons />
        <CalendarComponent />
        <AddEventComponent />
    </div>

export default ActionComponents;