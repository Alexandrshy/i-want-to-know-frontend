// @flow

import React from "react";
import "./LangPanel.css";

type Props = {
  lang: string,
  onSetLocale: Function
};

const LangPanel = ({ onSetLocale = f => f, lang }: Props) => {
  return (
    <ul className="app-lang-panel-list">
      <li className="app-lang-panel-item">
        <button
          type="button"
          className={`app-lang-panel-button${
            lang === "en" ? ` is-active` : ``
          }`}
          onClick={() => onSetLocale("en")}
        >
          EN
        </button>
      </li>
      <li className="app-lang-panel-item">
        <button
          type="button"
          className={`app-lang-panel-button${
            lang === "ru" ? ` is-active` : ``
          }`}
          onClick={() => onSetLocale("ru")}
        >
          RU
        </button>
      </li>
    </ul>
  );
};

export default LangPanel;
