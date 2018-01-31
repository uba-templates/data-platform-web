import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as home from './home/reducer.js';
import thunk from 'redux-thunk';

const store = createStore(
    combineReducers({...home}),
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;