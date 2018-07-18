// @flow

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import thunk from 'redux-thunk';
import AppContainer from './containers/AppContainer';
import './index.css';

addLocaleData(en);
addLocaleData(ru);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const entryPoint = document.getElementById('root');

if (entryPoint) {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>,
        entryPoint
    )
}