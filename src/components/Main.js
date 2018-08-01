// @flow

import React from "react";
import BooksPanelContainer from "../containers/BooksPanelContainer";
import { FormattedMessage } from "react-intl";

const Main = ({ lang, match, location, history }) => {
  return (
    <div>
      <h1>
        <FormattedMessage id="app-title" />
      </h1>
      <BooksPanelContainer
        match={match}
        location={location}
        history={history}
      />
    </div>
  );
};

export default Main;
