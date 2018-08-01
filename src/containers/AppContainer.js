// @flow

import { connect } from "react-redux";
import { withRouter } from "react-router";

import App from "../components/App";

const mapStateToProps = (state, match) => {
  return {
    lang: state.locale.lang,
    match: match
  };
};

export default withRouter(connect(mapStateToProps)(App));
