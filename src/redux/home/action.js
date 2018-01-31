import * as home from './action-type.js';

export const increment = () => ({
    type: home.INCREMENT_COUNTER
});

export const decrement = () => ({
    type: home.DECREMENT_COUNTER
});