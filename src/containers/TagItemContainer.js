// @flow

import { connect } from "react-redux";
import TagItem from "../components/Tag/TagItem";
import parseQueryString from "../untils/parseQueryString";
import { selectTag, setFilter } from "../actions";

const mapStateToProps = (state, { location, history }) => {
  return {
    location,
    history,
    lang: state.locale.lang,
    tags: state.tags,
    filterID: state.filterID
  };
};

const mapDispatchToProps = dispatch => ({
  onSelectTag: (id, value) => {
    dispatch(selectTag(id, value));
  },
  onSetFilter: filter => {
    dispatch(setFilter(filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagItem);
