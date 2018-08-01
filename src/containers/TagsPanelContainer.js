// @flow

import { connect } from "react-redux";

import TagsPanel from "../components/TagsPanel";
import parseQueryString from "../untils/parseQueryString";

const mapStateToProps = (state, { match, location, history }) => {
  const objURL = parseQueryString(location.search);
  let listID = [];

  for (var prop in objURL) {
    listID = [...listID, ...objURL[prop]];
  }

  const tagsWithStatus = state.tags.map(tag => {
    const tagProp = objURL[tag.tagGroup];
    tagProp && tagProp.indexOf(String(tag.id)) > -1
      ? (tag["tagSelected"] = true)
      : (tag["tagSelected"] = false);

    return tag;
  });

  return {
    location: location,
    history: history,
    tags: tagsWithStatus
  };
};

export default connect(mapStateToProps)(TagsPanel);
