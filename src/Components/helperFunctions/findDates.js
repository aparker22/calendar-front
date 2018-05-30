import moment from 'moment';

let now = moment();

let daysInMonth  = now.daysInMonth();

let monthArray = (daysInMonth) => {
    let newArray = []
    for (var i=1; i <=daysInMonth; i++) {
        newArray.push({"day": i, "event": []});
    }
    return newArray;
}

let dayArray = monthArray(daysInMonth);

export default dayArray;
