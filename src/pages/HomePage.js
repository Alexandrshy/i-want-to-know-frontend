// @flow

import React from "react";
import type { Location, History } from "react-router";
import MainContainer from "../containers/MainContainer";

type Props = {
  location: Location,
  history: History
};

const HomePage = ({ location, history }: Props) => {
  return <MainContainer location={location} history={history} />;
};

export default HomePage;
