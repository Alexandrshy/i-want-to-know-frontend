// @flow

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import reducer from './reducers';
import data from './constants/data';
import AppContainer from './containers/AppContainer';
import './index.css';

addLocaleData(en);
addLocaleData(ru);

const store = createStore(reducer, data);
const entryPoint = document.getElementById('root');

if (entryPoint) {
    render(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
        entryPoint
    )
}