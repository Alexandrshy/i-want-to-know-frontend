// @flow

import { connect } from "react-redux";

import TagItem from "../components/TagItem";
import parseQueryString from "../untils/parseQueryString";

const mapStateToProps = (state, { location, history }) => {
  return {
    location: location,
    history: history,
    lang: state.locale.lang
  };
};

export default connect(mapStateToProps)(TagItem);
