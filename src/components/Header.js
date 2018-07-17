// @flow

import React from 'react';
import LangPanelContainer from '../containers/LangPanelContainer';

const Header = () => {
    return (
        <header className="app-header">
            <a>Добавить книгу</a>
            <LangPanelContainer />
        </header>
    )
}

export default Header;