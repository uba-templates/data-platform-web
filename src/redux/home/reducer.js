import * as home from './action-type.js';

const initialState = {
    count: 0
};

export const countState = (state = initialState, action) => {
    switch (action.type) {
        case home.INCREMENT_COUNTER:
            return {...state, count: state.count + 1};
        case home.DECREMENT_COUNTER:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
};