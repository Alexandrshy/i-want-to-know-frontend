// @flow

import { connect } from "react-redux";

import TagItem from "../components/TagItem";
import parseQueryString from "../untils/parseQueryString";
import { selectTag } from "../actions";

const mapStateToProps = (state, { location, history }) => {
  return {
    location: location,
    history: history,
    lang: state.locale.lang,
    tags: state.tags
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectTag: id => {
    dispatch(selectTag(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagItem);
