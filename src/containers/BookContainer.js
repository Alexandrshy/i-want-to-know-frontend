// @flow

import { connect } from "react-redux";

import Book from "../components/Book/Book";

const mapStateToProps = (state, { match, history }) => {
  return {
    lang: state.locale.lang,
    books: state.books,
    match,
    history
  };
};

export default connect(mapStateToProps)(Book);
