import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store.js';
import App from './router';
import registerServiceWorker from './registerServiceWorker';

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <Component />
        </Provider>
        , document.querySelector("#root")
    )
};

render(App);
registerServiceWorker();