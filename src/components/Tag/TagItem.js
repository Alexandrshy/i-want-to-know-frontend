// @flow

import React, { PureComponent } from "react";
import { Route, Link } from "react-router-dom";
import type { Location, History } from "react-router";
import parseQueryString from "../../untils/parseQueryString";
import changeQueryObject from "../../untils/changeQueryObject";
import joinURL from "../../untils/joinURL";
import "./TagItem.css";

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
    tagGroup: string,
    tagSelected: boolean
  },
  onSelectTag: Function,
  onSetFilter: Function,
  location: Location,
  history: History
};

class TagItem extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const objURL = parseQueryString(this.props.location.search);

    const tagsWithStatus = this.props.tags.map(tag => {
      const tagProp = objURL[tag.tagGroup];
      if (tagProp && tagProp.indexOf(String(tag.id)) > -1) {
        this.props.onSelectTag(tag.id);
      }

      return tag;
    });
  }

  render() {
    const { tagSelected, titleRU, titleEN, id, tagGroup } = this.props.item;
    const {
      lang,
      location,
      item,
      history,
      onSelectTag,
      onSetFilter
    } = this.props;
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
              onSelectTag(item.id);
              onSetFilter(stringURL);
            }}
          />
          <span className="app-tag-delete" />
        </label>
      </li>
    );
  }
}

export default TagItem;
