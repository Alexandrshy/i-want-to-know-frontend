// @flow

import { connect } from "react-redux";
import { withRouter } from "react-router";
import App from "../components/App/App";
import { setFilter, setFilterID } from "../actions";
import parseQueryString from "../untils/parseQueryString";

const mapStateToProps = (state, match) => {
  return {
    lang: state.locale.lang,
    match: match
  };
};

const mapDispatchToProps = dispatch => ({
  onSetFilter: filter => {
    const objURL = parseQueryString(filter);
    const keysURL = Object.keys(objURL);
    const filterID = keysURL.reduce((prev, key) => {
      return [...prev, ...objURL[key]];
    }, []);
    dispatch(setFilter(filter));
    dispatch(setFilterID(filterID));
  }
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
