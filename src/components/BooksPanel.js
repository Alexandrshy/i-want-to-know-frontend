// @flow

import React from "react";
import { Route, Link } from "react-router-dom";

import TagsPanelContainer from "../containers/TagsPanelContainer";
import BooksListContainer from "../containers/BooksListContainer";

import parseQueryString from "../untils/parseQueryString";
import changeQueryObject from "../untils/changeQueryObject";
import joinURL from "../untils/joinURL";

const Books = ({ location, history }) => {
  return (
    <div>
      <TagsPanelContainer location={location} history={history} />
      <BooksListContainer location={location} history={history} />
    </div>
  );
};

export default Books;
