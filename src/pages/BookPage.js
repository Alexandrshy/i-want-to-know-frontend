// @flow

import React from "react";
import type { Location, History } from "react-router";
import BookContainer from "../containers/BookContainer";

type Props = {
  location: Location,
  history: History,
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
  }>
};

const BookPage = ({ books, history, location, match }: Props) => {
  return <BookContainer history={history} location={location} match={match} />;
};

export default BookPage;
