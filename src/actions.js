const UPDATE_EVENTS = "UPDATE_EVENTS";
export let updateEvents = (EventList) => ({type: UPDATE_EVENTS, payload: EventList});
let updateEventsAction = (state, action) => {
    return ({...state, events: action.payload});
  }
updateEvents.toString = () => UPDATE_EVENTS;

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
    [toggleAddEvent]:toggleEventAction
}

export default reducers;