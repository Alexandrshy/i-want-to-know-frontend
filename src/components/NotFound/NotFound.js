// @flow

import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import "./NotFound.css";

const NotFound = ({ lang }) => {
  return (
    <div>
      <h1 className="app-page-not-found-title">
        <FormattedMessage id="app-page-not-found-title" />
      </h1>
      {lang === "ru" ? (
        <p className="app-page-not-found-message">
          Сожалею! Таких страниц нет. Повторите попытку или вернитесь на{" "}
          <Link to="/">главную страницу</Link>.
        </p>
      ) : (
        <p className="app-page-not-found-message">
          Sorry! There is no such page. Please try again or return to{" "}
          <Link to="/">the main page</Link>.
        </p>
      )}
    </div>
  );
};

export default NotFound;
