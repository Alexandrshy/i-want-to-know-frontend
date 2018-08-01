// @flow

import { connect } from "react-redux";

import Main from "../components/Main";

const mapStateToProps = state => {
  return {
    lang: state.locale.lang
  };
};

export default connect(mapStateToProps)(Main);
