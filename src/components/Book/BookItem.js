//@flow

import React from "react";
import type { Location, History } from "react-router";
import { Link } from "react-router-dom";
import "./BookItem.css";

type Props = {
  lang: string,
  tags: Array<{
    id: string,
    tagGroup: string,
    titleRU: string,
    titleEN: string,
    language: string,
    tagSelected: boolean
  }>,
  item: {
    id: number,
    titleRU: string,
    titleEN: string,
    authorsRU: string,
    authorsEN: string,
    linkRU: string,
    linkEN: string,
    length: number,
    lang: string,
    date: string,
    free: boolean,
    desc: string,
    tag: Array<string>,
    picture: string
  },
  location: Location,
  history: History
};

const BooksList = ({ lang, tags, item, location, history }: Props) => {
  return (
    <li className="app-book-item">
      <Link className="app-book-link" to={`/book/${item.id}`}>
        <div className="app-book-item-img-wrapper">
          <img src={`${item.picture}`} className="app-book-item-img" />
        </div>
        <p className="app-book-item-name">
          {lang === "ru" ? item.titleRU : item.titleEN}
        </p>
        <p className="app-book-item-authors">
          {lang === "ru" ? item.authorsRU : item.authorsEN}
        </p>
      </Link>
    </li>
  );
};

export default BooksList;
