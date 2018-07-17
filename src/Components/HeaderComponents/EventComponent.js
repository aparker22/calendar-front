import React from 'react';
import {connect} from 'react-redux';
import {sendNewEvent} from '../helperFunctions/addEvents';
import {toggleAddEvent} from '../../actions';

let submitEvent = (event, dispatch) => {
    sendNewEvent(event)
    event.target.reset()
    dispatch(toggleAddEvent())
}

let EventComponent = ({addEventActive, dispatch}) => {
    if (addEventActive === true) {
        return <div className="event-component">
            <span className="event-close" onClick={() => {
                dispatch(toggleAddEvent())}
            }>close</span>
            <h3>Enter New Event</h3>
            <form className="event-form" onSubmit={(event) => submitEvent(event, dispatch)}>
                <div><p>Month:</p><input name="month"></input></div>
                <div><p>Day:</p><input name="day"></input></div>
                <div><p>Start Time:</p><input name="start"></input></div>
                <div><p>End Time:</p><input name="end"></input></div>
                <div><p>Description:</p><input name="description"></input></div>
                <button type="submit">Submit</button>
            </form>
        </div>
    } else {
        return null;
    }
} 

let mapStateToProps = (state) => {
    return {addEventActive: state.addEventActive}
}

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventComponent);
