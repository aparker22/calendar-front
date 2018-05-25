const UPDATE_EVENTS = "UPDATE_EVENTS";
export let updateEvents = (EventList) => ({type: UPDATE_EVENTS, payload: EventList});
let updateEventsAction = (state, action) => {
    return ({...state, events: action.payload});
  }
updateEvents.toString = () => UPDATE_EVENTS;


let reducers = {
    [updateEvents]: updateEventsAction,
}

export default reducers;