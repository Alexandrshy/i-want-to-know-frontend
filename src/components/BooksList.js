//@flow

import React from "react";
import _ from "lodash";
import BooksItemContainer from "../containers/BookItemContainer";
import parseQueryString from "../untils/parseQueryString";

const BooksList = ({ books, location, history }) => {
  const objURL = parseQueryString(location.search);
  const keysURL = Object.keys(objURL);

  const filteredBooks = books.filter(book => {
    return keysURL.reduce((prev, key) => {
      if (_.intersection(objURL[keysURL], book.tag).length === 0) {
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
