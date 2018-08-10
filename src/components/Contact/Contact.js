// @flow

import React from "react";
import LinkMain from "../Link/LinkMain";
import { FormattedMessage } from "react-intl";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="app-contact">
      <LinkMain />
      <h1 className="app-contact-title">
        <FormattedMessage id="app-footer-link-3" />
      </h1>
      <div className="app-contact-text">
        <p className="app-contact-text-title">If you would like to ...</p>
        <ol className="app-contact-list">
          <li className="app-contact-item">Add a book</li>
          <li className="app-contact-item">Add a section</li>
          <li className="app-contact-item">Offer your own set of books</li>
          <li className="app-contact-item">
            Suggest an improvement for the project
          </li>
        </ol>
        <p>
          Please send me a message by email to test@test.com or Telegrams @test
        </p>
      </div>
    </div>
  );
};

export default Contact;