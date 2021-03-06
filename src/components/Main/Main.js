// @flow

import React from "react";
import BooksPanelContainer from "../../containers/BooksPanelContainer";
import BooksPanel from "../Book/BooksPanel";
import { FormattedMessage } from "react-intl";
import type { Location, History } from "react-router";
import "./Main.css";

type Props = {
  lang: string,
  location: Location,
  history: History
};

const Main = ({ lang, location, history }: Props) => {
  return (
    <div>
      <h1 className="app-bookshelf-title">
        <FormattedMessage id="app-title" />
      </h1>
      <BooksPanel location={location} history={history} />
    </div>
  );
};

export default Main;
