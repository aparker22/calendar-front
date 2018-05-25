export let fetchEventList = (month) => {
    return (fetch(`http://localhost:5000/events/${month}`, 
    {method: "GET"})
    .then(res => res.json()))
}

export let addEventToDatabase = (event) => {
    return (fetch(`http://localhost:5000/addevent`,
    {method: "POST",
    body: event,
    headers: new Headers ({
        "Content-Type": "application/json"
    })
    })
)
}
