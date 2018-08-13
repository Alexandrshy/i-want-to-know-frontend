// @flow

import React from "react";
import LinkMainContainer from "../../containers/LinkMainContainer";
import { FormattedMessage } from "react-intl";
import type { History, Match } from "react-router";
import "./Book.css";

type Props = {
  lang: string,
  tags: Array<{
    id: string,
    tagGroup: string,
    titleRU: string,
    titleEN: string,
    language: string
  }>,
  books: Array<{
    id: string,
    tagGroup: string,
    descRU: string,
    descEN: string,
    titleRU: string,
    titleEN: string,
    language: string,
    picture: string,
    authorsRU: string,
    authorsEN: string,
    tag: Array<string>,
    length: number,
    date: string,
    lang: string,
    linkEN: {},
    linkRU: {}
  }>,
  history: History,
  match: Match
};

const Book = ({ lang, books, tags, history, match }: Props) => {
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
                <b>
                  <FormattedMessage id="app-book-links" />:{" "}
                </b>
                <ul className="app-book-link-list">
                  {lang === "ru"
                    ? Object.keys(book.linkRU).map(function(prop, index) {
                        return (
                          <li key={prop} className="app-book-link-item">
                            <a href={book.linkRU[prop]}>{prop}</a>
                          </li>
                        );
                      })
                    : Object.keys(book.linkEN).map(function(prop, index) {
                        return (
                          <li key={prop} className="app-book-link-item">
                            <a href={book.linkEN[prop]}>{prop}</a>
                          </li>
                        );
                      })}
                </ul>
              </li>
              <li className="app-book-inform-item">
                <b>
                  <FormattedMessage id="app-book-authors" />:{" "}
                </b>
                {lang === "ru" ? book.authorsRU : book.authorsEN}
              </li>
              <li className="app-book-inform-item">
                <b>
                  <FormattedMessage id="app-book-publisher" />:{" "}
                </b>
                {book.date}
              </li>
              <li className="app-book-inform-item">
                <b>
                  <FormattedMessage id="app-book-publisher" />:{" "}
                </b>
                {book.length} <FormattedMessage id="app-book-pages" />
              </li>
              <li className="app-book-inform-item">
                <b>
                  <FormattedMessage id="app-book-language" />:{" "}
                </b>
                {book.lang}
              </li>
              <li className="app-book-inform-item">
                <b>
                  <FormattedMessage id="app-book-tags" />:{" "}
                </b>
                <div className="app-book-inform-tag">
                  {book.tag.map(itemElem => (
                    <span key={`tag-${itemElem}`}>
                      {lang === "ru"
                        ? tags.find(tagElem => tagElem.id === itemElem).titleRU
                        : tags.find(tagElem => tagElem.id === itemElem).titleEN}
                    </span>
                  ))}
                </div>
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
        <h3>
          <FormattedMessage id="app-take-book-title" />{" "}
          {Object.keys(book.linkEN).map(function(prop, index) {
            return (
              <li key={prop} className="app-book-link-item">
                <a href={book.linkEN[prop]}>{prop}</a>
              </li>
            );
          })}.
        </h3>
      </div>
    </div>
  );
};

export default Book;
