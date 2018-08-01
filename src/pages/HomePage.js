// @flow

import React from "react";
import MainContainer from "../containers/MainContainer";

const HomePage = ({ match, location, history }) => {
  return <MainContainer match={match} location={location} history={history} />;
};

export default HomePage;
