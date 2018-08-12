// @flow

import React from "react";
import { Route, Link } from "react-router-dom";
import type { Location, History } from "react-router";
import parseQueryString from "../../untils/parseQueryString";
import changeQueryObject from "../../untils/changeQueryObject";
import joinURL from "../../untils/joinURL";
import "./TagItem.css";

type Props = {
  filterID: Array<string>,
  lang: string,
  tags: Array<{
    id: string,
    tagGroup: string,
    titleRU: string,
    titleEN: string,
    language: string
  }>,
  item: {
    id: number,
    titleRU: string,
    titleEN: string,
    tagGroup: string
  },
  onSelectTag: Function,
  onSetFilter: Function,
  location: Location,
  history: History
};

const TagItem = ({
  item,
  filterID,
  lang,
  location,
  history,
  onSelectTag,
  onSetFilter
}: Props) => {
  const { titleRU, titleEN, id, tagGroup } = item;
  const tagSelected = filterID.indexOf(id) > -1;
  return (
    <li className={`app-tag-item${tagSelected === true ? " is-active" : ""}`}>
      <label className="app-tag-label">
        {lang === "ru" ? titleRU : titleEN}
        <input
          className="app-tag-input"
          name="1"
          type="checkbox"
          checked={tagSelected}
          value={`${id}`}
          data-group={`${tagGroup}`}
          onChange={e => {
            const tagGroup = e.target.getAttribute("data-group");
            const tagID = e.target.value;

            const stringURL = joinURL(
              changeQueryObject(
                parseQueryString(location.search),
                tagGroup,
                tagID
              )
            );

            history.push(stringURL);
            onSelectTag(item.id, e.target.checked);
            onSetFilter(stringURL);
          }}
        />
        <span className="app-tag-delete" />
      </label>
    </li>
  );
};

export default TagItem;
