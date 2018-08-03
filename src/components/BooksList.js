//@flow

import React from "react";
import BooksItemContainer from "../containers/BookItemContainer";

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map(item => <BooksItemContainer key={item.id} item={item} />)}
    </ul>
  );
};

export default BooksList;
