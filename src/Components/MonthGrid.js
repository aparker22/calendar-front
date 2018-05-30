import React, {Component} from 'react';
import {connect} from 'react-redux';
import EventSquare from './CalendarComponents/EventSquare';
import {fetchEventList} from './helperFunctions/fetches';
import {updateEvents} from '../actions';
import dayArray from './helperFunctions/findDates';


let mapStateToProps = (state) => {
    return {events: state.events}
};

let mapDispatchToProps = (dispatch) => {
    return {dispatch: dispatch}
  };



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