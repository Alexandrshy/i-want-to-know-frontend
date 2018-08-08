// @flow

import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="app-footer-container">
        <nav className="app-footer-nav">
          <ul className="app-footer-nav-list">
            <li className="app-footer-nav-item">
              <Link className="app-footer-nav-link" to="/about">
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
        <p className="app-footer-copyrighted">
          <FormattedMessage id="app-footer-dev" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
