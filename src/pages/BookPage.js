// @flow

import React from "react";

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
  }>
};

const Book = ({ books }: Props) => {
  return <p>Выбранная книга</p>;
};

export default Book;
