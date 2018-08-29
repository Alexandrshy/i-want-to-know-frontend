// @flow

import React from "react";
import LangPanelContainer from "../../containers/LangPanelContainer";
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.css";
// import logo from "../../picture/test-logo.png";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header-container">
        <ul className="app-header-list-link">
          <li className="app-header-item-link">
            <Link className="app-header-link" to="/addBook">
              <FormattedMessage id="app-link-add-book" />
            </Link>
          </li>
        </ul>
        {/* <Link className="app-header-logo" to="/form">
          <img src={logo} alt="logo" />
        </Link> */}
        <LangPanelContainer />
      </div>
    </header>
  );
};

export default Header;
