// @flow

import React, { PureComponent } from "react";
import "./LinkBack.css";
import { withRouter } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import backIcon from "../../picture/back.svg";

class LinkBack extends PureComponent {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    console.log(19, this.props.location);
    return (
      <div className="app-back-wrapper">
        <span className="app-back" onClick={this.goBack}>
          <img src={backIcon} className="app-back-icon" />
          <FormattedMessage id="app-link-main" />
        </span>
      </div>
    );
  }
}

export default LinkBack;
