// @flow

import React, { PureComponent } from "react";
import { Route, Link } from "react-router-dom";

import parseQueryString from "../untils/parseQueryString";
import changeQueryObject from "../untils/changeQueryObject";
import joinURL from "../untils/joinURL";

class TagItem extends PureComponent {
  constructor(props) {
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
    return (
      <li className={`${tagSelected === true ? "is-active" : ""}`}>
        <label>
          {this.props.lang === "ru" ? titleRU : titleEN}
          <input
            name="1"
            type="checkbox"
            checked={tagSelected}
            value={`${id}`}
            data-group={`${tagGroup}`}
            onChange={e => {
              const tagGroup = e.target.getAttribute("data-group");
              const tagID = e.target.value;

              this.props.history.push(
                joinURL(
                  changeQueryObject(
                    parseQueryString(this.props.location.search),
                    tagGroup,
                    tagID
                  )
                )
              );
              this.props.onSelectTag(this.props.item.id);
            }}
          />
        </label>
      </li>
    );
  }
}

export default TagItem;
