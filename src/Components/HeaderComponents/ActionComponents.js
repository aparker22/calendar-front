import React from 'react';
import ActionButtons from './ActionButtons';
import CalendarComponent from './CalendarComponent';
import AddEventComponent from './AddEventComponent';
import EventComponent from './EventComponent';

let ActionComponents = () => {
    return <div className="header-left">
        <ActionButtons />
        <CalendarComponent />
        <AddEventComponent />
        <EventComponent />
    </div>
}

export default ActionComponents;