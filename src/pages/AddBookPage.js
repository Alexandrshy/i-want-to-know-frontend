// @flow

import React from "react";
import FormWrapper from "../components/Form/FormWrapper";
import type { History } from "react-router";

type Props = {
  history: History
};

const AddBookPage = ({ history }: Props) => {
  return <FormWrapper history={history} />;
};

export default AddBookPage;
