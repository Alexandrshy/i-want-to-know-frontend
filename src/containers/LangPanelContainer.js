// @flow

import { connect } from "react-redux";

import LangPanel from "../components/LangPanel";
import { setLocale } from "../actions";

const mapStateToProps = state => {
  return {
    lang: state.locale.lang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetLocale: lang => {
      localStorage.alhubLang = lang;
      dispatch(setLocale(lang));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LangPanel);
