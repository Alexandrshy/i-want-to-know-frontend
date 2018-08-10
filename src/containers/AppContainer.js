// @flow

import { connect } from "react-redux";
import { withRouter } from "react-router";
import App from "../components/App/App";
import { setFilter } from "../actions";

const mapStateToProps = (state, match) => {
  return {
    lang: state.locale.lang,
    match: match
  };
};

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => {
    dispatch(setFilter(filter));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
