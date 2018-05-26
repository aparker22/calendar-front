import {addEventToDatabase} from './fetches';

export let sendNewEvent = (event) => {
    event.preventDefault();
    let form = event.target;
    let dataToSend = {"month": form.month.value, "day": form.day.value, "start": form.start.value, "end": form.end.value, "description": form.description.value}    
    addEventToDatabase(JSON.stringify(dataToSend));
}