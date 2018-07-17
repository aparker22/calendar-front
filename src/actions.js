const UPDATE_EVENTS = "UPDATE_EVENTS";
export let updateEvents = (EventList) => ({type: UPDATE_EVENTS, payload: EventList});
let updateEventsAction = (state, action) => {
    return ({...state, events: action.payload});
  }
updateEvents.toString = () => UPDATE_EVENTS;

const UPDATE_DATE_OBJECT = "UPDATE_DATE_OBJECT";
export let updateDateObject = (dateObject) => ({type: UPDATE_DATE_OBJECT, payload: dateObject});
let updateDateObjectAction = (state, action) => {
    return ({...state, dateObject: action.payload});
  }
updateDateObject.toString = () => UPDATE_DATE_OBJECT;

const TOGGLE_ADD_EVENT = "TOGGLE_ADD_EVENT";
export let toggleAddEvent = () => ({type: TOGGLE_ADD_EVENT});
let toggleEventAction = (state, action) => {
    if (state.addEventActive === false) {
        return ({...state, addEventActive: true});
    } else return ({...state, addEventActive: false});
  }
toggleAddEvent.toString = () => TOGGLE_ADD_EVENT;


let reducers = {
    [updateEvents]: updateEventsAction,
    [toggleAddEvent]:toggleEventAction,
    [updateDateObject]: updateDateObjectAction
}

export default reducers;