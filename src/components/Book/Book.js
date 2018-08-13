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
      <div className="app-book-text">
        <div className="app-book-photo-wrapper">
          <div className="app-book-photo">
            <img src={book.picture} />
          </div>
          <div className="app-book-inform">
            <ul className="app-book-inform-list">
              <li className="app-book-inform-item">
                <b>Authors:</b>{" "}
                {lang === "ru" ? book.authorsRU : book.authorsEN}
              </li>
              <li className="app-book-inform-item">
                <b>Publisher:</b> {book.date}
              </li>
              <li className="app-book-inform-item">
                <b>Number of pages:</b> {book.length} pages
              </li>
              <li className="app-book-inform-item">
                <b>Language:</b> {book.lang}
              </li>
            </ul>
          </div>
        </div>
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
    </div>
  );
};

export default Book;
