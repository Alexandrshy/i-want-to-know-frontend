// @flow

import React from "react";
import { Route, Link } from "react-router-dom";

import TagsPanelContainer from "../containers/TagsPanelContainer";

import parseQueryString from "../untils/parseQueryString";
import changeQueryObject from "../untils/changeQueryObject";
import joinURL from "../untils/joinURL";

const Books = ({ lang, books, tags, location, history }) => {
  return (
    <div>
      <TagsPanelContainer location={location} history={history} />
      <ul>
        {books.map(item => (
          <li key={item.id}>
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
        ))}
      </ul>
    </div>
  );
};

export default Books;
