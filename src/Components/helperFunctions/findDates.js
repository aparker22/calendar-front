import moment from 'moment';

let now = moment();

export let dateObject = {
    currentDate: now.date(),
    currentMonth: now.month(),
    firstDayOfMonth: now.date(1).day()
};

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
