import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import ReactDOM from 'react-dom';
import Reducer from './js/reducers/reducer';
import App from './js/pages/app';

let storeData = Immutable.Map(window.__PRELOADED_STATE__);
delete window.__PRELOADED_STATE__;
const store = createStore(Reducer, storeData);


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    ),document.getElementById('app')
);
