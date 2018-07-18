// @flow

import React from 'react';

type Props = {
    onSetLocale: Function;
}

const LangPanel = ({ onSetLocale = f => f }: Props) => {
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
                    onClick={() => onSetLocale('ru')}>RU</button>
            </li>
        </ul>
    )
}

export default LangPanel;