// @flow

import { connect } from "react-redux";
import { selectTag } from "../actions";
import TagsPanel from "../components/Tag/TagsPanel";
import parseQueryString from "../untils/parseQueryString";

const mapStateToProps = (state, { match, location, history }) => {
  return {
    location,
    history,
    tags: state.tags
  };
};

export default connect(mapStateToProps)(TagsPanel);
