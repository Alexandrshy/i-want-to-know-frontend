// @flow

import React from "react";
import About from "../components/About/About";
import type { History } from "react-router";

type Props = {
  history: History
};

const AboutPage = ({ history }: Props) => {
  return <About history={history} />;
};

export default AboutPage;
