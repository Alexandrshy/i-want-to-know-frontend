// @flow

import { connect } from "react-redux";

import BookItem from "../components/BookItem";

const mapStateToProps = (state, { location, history }) => {
  return {
    location,
    history,
    lang: state.locale.lang,
    tags: state.tags
  };
};

export default connect(mapStateToProps)(BookItem);
