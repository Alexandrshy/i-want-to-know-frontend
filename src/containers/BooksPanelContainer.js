// @flow

import { connect } from "react-redux";

import Books from "../components/Books";

const mapStateToProps = (state, { match, location, history }) => {
  console.log("location  - 5", history);
  console.log("location  - 6", location);

  return {
    location: location,
    history: history,
    lang: state.locale.lang,
    books: state.books,
    tags: state.tags
  };
};

export default connect(mapStateToProps)(Books);
