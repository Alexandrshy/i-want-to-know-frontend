//@flow

import React from "react";
import _ from "lodash";
import type { Location, History } from "react-router";
import BooksItemContainer from "../containers/BookItemContainer";
import parseQueryString from "../untils/parseQueryString";

type Props = {
  books: Array<{
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
    tag: Array<string>
  }>,
  location: Location,
  history: History
};

const BooksList = ({ books, location, history }: Props) => {
  const objURL = parseQueryString(location.search);
  const keysURL = Object.keys(objURL);

  const filteredBooks = books.filter(book => {
    return keysURL.reduce((prev, key) => {
      if (_.intersection(objURL[key], book.tag).length === 0) {
        return false;
      } else {
        return prev;
      }
    }, true);
  });

  return (
    <ul>
      {filteredBooks.map(item => (
        <BooksItemContainer
          key={item.id}
          item={item}
          location={location}
          history={history}
        />
      ))}
    </ul>
  );
};

export default BooksList;
