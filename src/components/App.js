// @flow

import React, { PureComponent } from 'react';
import { IntlProvider } from 'react-intl';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import messages from './messages';

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
                <Main />
                <Footer />
            </div>
        </IntlProvider>
    )
}

export default App;