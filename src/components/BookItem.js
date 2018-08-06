//@flow

import React from "react";
import type { Location, History } from "react-router";

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
    tag: Array<string>
  },
  location: Location,
  history: History
};

const BooksList = ({ lang, tags, item, location, history }: Props) => {
  return (
    <li>
      {lang === "ru" ? (
        <div>
          <p>{item.titleRU}</p>
          <p>{item.authorsRU}</p>
          <p>{item.length}</p>
          <p>{item.lang}</p>
          <p>
            {item.tag.map(itemElem => (
              <span key={`tag-${itemElem}`}>
                {tags.find(tagElem => tagElem.id === itemElem).titleRU}
              </span>
            ))}
          </p>
        </div>
      ) : (
        <div>
          <p>{item.titleEN}</p>
          <p>{item.authorsEN}</p>
          <p>{item.length}</p>
          <p>{item.lang}</p>
          <p>
            {item.tag.map(itemElem => (
              <span key={`tag-${itemElem}`}>
                {tags.find(tagElem => tagElem.id === itemElem).titleEN}
              </span>
            ))}
          </p>
        </div>
      )}
    </li>
  );
};

export default BooksList;
