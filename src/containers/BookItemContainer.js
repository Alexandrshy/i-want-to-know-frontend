// @flow

import { connect } from "react-redux";

import BookItem from "../components/BookItem";

const mapStateToProps = state => {
  return {
    lang: state.locale.lang,
    tags: state.tags
  };
};

export default connect(mapStateToProps)(BookItem);
