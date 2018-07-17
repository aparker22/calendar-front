import moment from 'moment';

let now = moment();
let daysInMonth  = now.daysInMonth();

export let dateObject = {
    currentDate: now.date(),
    currentMonth: now.month(),
    firstDayOfMonth: now.date(1).day(),
    lastDayOfMonth: now.date(daysInMonth).day()
};



let monthArray = (daysInMonth) => {
    let newArray = []
    for (var i=1; i <=daysInMonth; i++) {
        newArray.push({"day": i, "event": []});
    }
    return newArray;
}

let dayArray = monthArray(daysInMonth);

export default dayArray;
