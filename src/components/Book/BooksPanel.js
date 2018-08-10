// @flow

import React from "react";
import { Route, Link } from "react-router-dom";
import type { Location, History } from "react-router";
import TagsPanelContainer from "../../containers/TagsPanelContainer";
import BooksListContainer from "../../containers/BooksListContainer";
import parseQueryString from "../../untils/parseQueryString";
import changeQueryObject from "../../untils/changeQueryObject";
import joinURL from "../../untils/joinURL";

type Props = {
  location: Location,
  history: History
};

const Books = ({ location, history }: Props) => {
  return (
    <div className="app-bookshelf">
      <TagsPanelContainer location={location} history={history} />
      <BooksListContainer location={location} history={history} />
    </div>
  );
};

export default Books;
