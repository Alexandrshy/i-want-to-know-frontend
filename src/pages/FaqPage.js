// @flow

import React from "react";
import Faq from "../components/Faq/Faq";
import type { History } from "react-router";

type Props = {
  history: History
};

const FaqPage = ({ history }: Props) => {
  return <Faq history={history} />;
};

export default FaqPage;
