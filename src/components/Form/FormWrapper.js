// @flow

import React from "react";
import Form from "./Form";
import LinkMainContainer from "../../containers/LinkMainContainer";
import { FormattedMessage } from "react-intl";
import type { History } from "react-router";
import "./Form.css";

type Props = {
  history: History
};

const FormWrapper = ({ history }: Props) => {
  return (
    <div className="app-form">
      <LinkMainContainer history={history} />
      <h1 className="app-form-title">
        <FormattedMessage id="app-footer-link-2" />
      </h1>
      <div className="app-form-wrapper">
        <Form />
      </div>
    </div>
  );
};

export default FormWrapper;
