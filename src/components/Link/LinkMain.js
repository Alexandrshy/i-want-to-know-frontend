// @flow

import React, { PureComponent } from "react";
import "./LinkMain.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import backIcon from "../../picture/back.svg";

const LinkMain = () => {
  return (
    <div className="app-main-wrapper">
      <Link className="app-main" to="/">
        <img src={backIcon} className="app-main-icon" />
        <FormattedMessage id="app-link-main" />
      </Link>
    </div>
  );
};

export default LinkMain;
