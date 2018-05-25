import reducers from './actions';

const initialState = {
    events: [{"month": "may",
            "day": 10,
            "start": "9:00 am",
            "end": "11:00 am",
            "description": "Birthday Party"}
        ]
    }

let fallbackReducer = state => state; 

let reducer = (state = initialState, action) => {
    let babyReducer = reducers[action.type];
    babyReducer = babyReducer || fallbackReducer;
    let newState = babyReducer(state, action);
    return newState;
}

export default reducer;