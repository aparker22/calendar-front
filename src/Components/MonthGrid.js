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
        newArray.push({"day": i, "event": []});
    }
    return newArray;
}


    


let dayCount = daysInMonth(month, year);
let dayArray = monthArray(dayCount);

class MonthGrid extends Component {

    componentDidMount() {
        fetchEventList('may')
        .then(res => this.props.dispatch(updateEvents(res)))
    }

    render() {
        let {events} = this.props;

        let GetSquares = () =>  {
            let monthEventArray = dayArray.map(day => day); 
            events.map((event1) => {
                return (monthEventArray[event1.day-1].event).push(event1);
            })
            return monthEventArray;
        };
        
        let monthEventArray = GetSquares();

        return <div className="month-grid">
            <ul className="squares">{
                monthEventArray.map((day) => {
                    return <EventSquare date={day} />
                })
            }</ul>
        </div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MonthGrid);