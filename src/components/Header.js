// @flow

import React from "react";
import LangPanelContainer from "../containers/LangPanelContainer";
import { FormattedMessage } from "react-intl";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <a>
        <FormattedMessage id="app-link-add-book" />
      </a>
      <LangPanelContainer />
    </header>
  );
};

export default Header;
