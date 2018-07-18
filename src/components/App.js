// @flow

import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';

import Header from './Header';
// import Main from './Main';
import Footer from './Footer';

import { Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'

import messages from '../constants/messages';

type Props = {
    lang: string;
}

const App = ({ lang }: Props) => {
    return (
        <IntlProvider 
            locale={ lang }
            messages={messages[lang]}>
            <div>
                <Header />
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Footer />
            </div>
        </IntlProvider>
    )
}

export default App;