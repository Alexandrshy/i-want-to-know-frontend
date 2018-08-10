// @flow

import React from "react";
import LangPanelContainer from "../../containers/LangPanelContainer";
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-container">
        <ul className="app-header-list-link">
          <li className="app-header-item-link">
            <a className="app-header-link" href="javascript:void(0);">
              <FormattedMessage id="app-link-add-book" />
            </a>
          </li>
        </ul>
        <LangPanelContainer />
      </div>
    </header>
  );
};

export default Header;
