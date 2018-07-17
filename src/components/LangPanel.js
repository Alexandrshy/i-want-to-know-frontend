// @flow

import React from 'react';

const LangPanel = ({ onSetLocale = f => f }) => {
    return (
        <ul className="app-lang-panel">
            <li className="app-lang-panel-item">
                <button 
                    type="button"
                    className="app-lang-panel-button"
                    onClick={() => onSetLocale('en')}>EN</button>
            </li>
            <li className="app-lang-panel-item">
                <button 
                    type="button"
                    className="app-lang-panel-button"
                    onClick={() => onSetLocale('ru')}>РУ</button>
            </li>
        </ul>
    )
}

export default LangPanel;