// @flow

import { connect } from "react-redux";

import NotFound from "../components/NotFound/NotFound";

const mapStateToProps = state => {
  return {
    lang: state.locale.lang
  };
};

export default connect(mapStateToProps)(NotFound);
