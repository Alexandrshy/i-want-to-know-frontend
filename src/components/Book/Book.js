// @flow

import React from "react";
import LinkMainContainer from "../../containers/LinkMainContainer";
import { FormattedMessage } from "react-intl";
import type { History, Match } from "react-router";
import "./Book.css";

type Props = {
  lang: string,
  books: Array<{
    id: string,
    tagGroup: string,
    descRU: string,
    descEN: string,
    titleRU: string,
    titleEN: string,
    language: string
  }>,
  history: History,
  match: Match
};

const Book = ({ lang, books, history, match }: Props) => {
  const book = books.filter(item => {
    return item.id === match.params.book;
  })[0];
  return (
    <div className="app-book">
      <LinkMainContainer history={history} />
      <h1 className="app-book-title">
        {lang === "ru" ? book.titleRU : book.titleEN}
      </h1>
      {lang === "ru" ? (
        <div
          className="app-book-desk"
          dangerouslySetInnerHTML={{ __html: book.descRU }}
        />
      ) : (
        <div
          className="app-book-desk"
          dangerouslySetInnerHTML={{ __html: book.descEN }}
        />
      )}
    </div>
  );
};

export default Book;
