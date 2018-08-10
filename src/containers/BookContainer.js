// @flow

import { connect } from "react-redux";

import Book from "../components/Book/Book";

const mapStateToProps = state => {
  return {
    lang: state.locale.lang,
    books: state.books
  };
};

export default connect(mapStateToProps)(Book);
