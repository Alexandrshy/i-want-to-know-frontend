// @flow

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import data from './constants/data';
import App from './components/App';
import './index.css';

const store = createStore(reducer, data);
const entryPoint = document.getElementById('root');

if (entryPoint) {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        entryPoint
    )
}