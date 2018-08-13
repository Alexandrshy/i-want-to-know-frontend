// @flow

import React from "react";
import Contact from "../components/Contact/Contact";
import type { History } from "react-router";

type Props = {
  history: History
};

const ContactPage = ({ history }: Props) => {
  return <Contact history={history} />;
};

export default ContactPage;
