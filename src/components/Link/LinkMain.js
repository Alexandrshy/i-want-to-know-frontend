// @flow

import React, { PureComponent } from "react";
import "./LinkMain.css";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import backIcon from "../../picture/back.svg";
import type { History } from "react-router";

type Props = {
  history: History,
  filter: string
};

class LinkMain extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack: () => void;
  goBack() {
    this.props.history.push(`/${this.props.filter}`);
  }

  render() {
    return (
      <div className="app-main-wrapper">
        <span
          className="app-link-main"
          onClick={this.goBack}
          to={`/${this.props.filter}`}
        >
          <svg
            className="app-main-icon"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 477.175 477.175"
          >
            <g>
              <path
                fill="#fff"
                d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
              />
            </g>
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
            <g />
          </svg>
          <FormattedMessage id="app-link-main" />
        </span>
      </div>
    );
  }
}

export default LinkMain;
