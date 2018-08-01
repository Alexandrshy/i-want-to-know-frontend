// @flow

import React from "react";
import { Route, Link } from "react-router-dom";

import parseQueryString from "../untils/parseQueryString";
import changeQueryObject from "../untils/changeQueryObject";

const Books = ({ lang, books, tags, history, location }) => {
  return (
    <div>
      <ul>
        {tags.map(item => (
          <li
            key={item.id}
            className={`${item.active === true ? "is-active" : ""}`}
          >
            <label>
              {lang === "ru" ? item.titleRU : item.titleEN}
              <input
                name="1"
                type="checkbox"
                value={`${item.id}`}
                data-group={`${item.tagGroup}`}
                onChange={e => {
                  // history.push(`?test=${item.id}`);
                  const tagGroup = e.target.getAttribute("data-group");
                  const tagID = e.target.value;

                  console.log(
                    changeQueryObject(
                      parseQueryString(location.search),
                      tagGroup,
                      tagID
                    )
                  );
                }}
              />
            </label>
          </li>
        ))}
      </ul>
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
