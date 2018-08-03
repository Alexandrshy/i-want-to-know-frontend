// @flow

import { connect } from "react-redux";
import { selectTag } from "../actions";
import BooksPanel from "../components/BooksPanel";
import parseQueryString from "../untils/parseQueryString";

const mapStateToProps = (state, { location, history }) => {
  return {
    location: location,
    history: history
  };
};

export default connect(mapStateToProps)(BooksPanel);
