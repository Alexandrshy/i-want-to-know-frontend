// @flow

import { connect } from "react-redux";

import BooksPanel from "../components/BooksPanel";
import parseQueryString from "../untils/parseQueryString";

const mapStateToProps = (state, { location, history }) => {
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
    lang: state.locale.lang,
    books: state.books,
    tags: tagsWithStatus
  };
};

export default connect(mapStateToProps)(BooksPanel);
