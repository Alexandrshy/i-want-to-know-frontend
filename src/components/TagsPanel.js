// @flow

import React from "react";
import { Route, Link } from "react-router-dom";

import TagItemContainer from "../containers/TagItemContainer";

const TagsPanel = ({ tags, history, location }) => {
  return (
    <ul>
      {tags.map(item => (
        <TagItemContainer
          key={item.id}
          item={item}
          location={location}
          history={history}
        />
      ))}
    </ul>
  );
};

export default TagsPanel;
