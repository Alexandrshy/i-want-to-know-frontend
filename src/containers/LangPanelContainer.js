// @flow

import { connect } from "react-redux";

import LangPanel from "../components/LangPanel";
import { setLocale } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onSetLocale: lang => {
      dispatch(setLocale(lang));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LangPanel);
