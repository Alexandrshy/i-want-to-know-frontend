// @flow

import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  return (
    <footer className="app-footer">
      <nav className="app-footer-nav">
        <ul className="app-footer-nav-list">
          <li className="app-footer-nav-item">
            <Link
              className="app-footer-nav-link"
              to={{ pathname: "/about", search: "?sort=name" }}
            >
              <FormattedMessage id="app-footer-link-1" />
            </Link>
          </li>
          <li className="app-footer-nav-item">
            <Link className="app-footer-nav-link" to="/faq">
              <FormattedMessage id="app-footer-link-2" />
            </Link>
          </li>
          <li className="app-footer-nav-item">
            <Link className="app-footer-nav-link" to="/contacts">
              <FormattedMessage id="app-footer-link-3" />
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        <FormattedMessage id="app-footer-dev" />
      </p>
    </footer>
  );
};

export default Footer;
