// @flow

import { connect } from "react-redux";

import BooksList from "../components/Book/BooksList";

const mapStateToProps = (state, { location, history }) => {
  return {
    location,
    history,
    books: state.books
  };
};

export default connect(mapStateToProps)(BooksList);
