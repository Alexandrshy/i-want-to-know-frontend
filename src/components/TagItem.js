// @flow

import React from "react";
import { Route, Link } from "react-router-dom";

import parseQueryString from "../untils/parseQueryString";
import changeQueryObject from "../untils/changeQueryObject";
import joinURL from "../untils/joinURL";

const TagItem = ({ lang, item, history, location }) => {
  return (
    <li className={`${item.tagSelected === true ? "is-active" : ""}`}>
      <label>
        {lang === "ru" ? item.titleRU : item.titleEN}
        <input
          name="1"
          type="checkbox"
          checked={item.tagSelected}
          value={`${item.id}`}
          data-group={`${item.tagGroup}`}
          onChange={e => {
            const tagGroup = e.target.getAttribute("data-group");
            const tagID = e.target.value;

            history.push(
              joinURL(
                changeQueryObject(
                  parseQueryString(location.search),
                  tagGroup,
                  tagID
                )
              )
            );
          }}
        />
      </label>
    </li>
  );
};

export default TagItem;
