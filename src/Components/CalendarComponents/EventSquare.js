import React from 'react';
import {connect} from 'react-redux';
import {toggleAddEvent} from '../../actions';


let mapDispatchToProps = (dispatch, props) => {
    return {dispatch: dispatch}
};

let fun = (event) => {
    if (event.length > 0 ) {
        return event.map((element) =>{
            return <p>{element.description}</p>
        })
        } else {
        return null;
    }
}

let EventSquare = ({date, highlightedDate, dispatch}) => {
    if (date.day === highlightedDate) {
        return <li className="highlight" onClick={() => {
            dispatch(toggleAddEvent())}
        }>
                <span>{date.day}</span>
                <div>{
                fun(date.event) 
            }</div>
            </li>
    } else {
    return <li onClick={() => {
        dispatch(toggleAddEvent())}
    }>
        <span>{date.day}</span>
        <div>{
           fun(date.event) 
    }</div>
    </li>
    }
}

export default connect(null, mapDispatchToProps)(EventSquare);