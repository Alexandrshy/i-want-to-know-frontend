// @flow

import React from "react";
import LinkBack from "../Link/LinkBack";
import LinkMain from "../Link/LinkMain";
import { FormattedMessage } from "react-intl";
import "./Book.css";

const Book = ({ location, history }) => {
  return (
    <div className="app-book">
      <LinkBack history={history} location={location} />
      <LinkMain />
      <h1 className="app-book-title">
        <p>123 456 789</p>
      </h1>
    </div>
  );
};

export default Book;
