// @flow

import { connect } from "react-redux";

import BooksList from "../components/BooksList";

const mapStateToProps = state => {
  return {
    books: state.books
  };
};

export default connect(mapStateToProps)(BooksList);
