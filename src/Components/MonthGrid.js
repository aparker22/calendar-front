import React, {Component} from 'react';
import {connect} from 'react-redux';
import Square from './Square';
import EventSquare from './EventSquare';
import {fetchEventList} from './helperFunctions/fetches';
import {updateEvents} from '../actions';


let mapStateToProps = (state) => {
    return {events: state.events}
};

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
  };


let today = new Date();
let month = today.getMonth() + 1;
let year = today.getFullYear();

let daysInMonth  = (month, year) => {
    return new Date(year, month, 0).getDate();
}

let monthArray = (daysInMonth) => {
    let newArray = []
    for (var i=1; i <=daysInMonth; i++) {
        newArray.push(i);
    }
    return newArray;
}
    
let GetSquares = ({dayArray, events}) =>  {  
    let returnComponent;
    return <ul className="squares">{
        dayArray.map((day) => {
            events.map((event) => {
            if (day === events[0].day) {
                returnComponent = <EventSquare day={day} event={events[0]} />
               } else { 
                returnComponent = <Square day={day} />
               }
            return returnComponent;
        })
        return returnComponent
    })
    }</ul>
};

let dayCount = daysInMonth(month, year);
let dayArray = monthArray(dayCount);

class MonthGrid extends Component {

    componentDidMount() {
        fetchEventList('may')
        .then(res => this.props.dispatch(updateEvents(res)))
    }

    render() {
        let {events} = this.props;

        return <div className="month-grid">
            <GetSquares dayArray={dayArray} events={events} />
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthGrid);