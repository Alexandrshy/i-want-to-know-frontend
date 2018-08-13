// @flow

import { connect } from "react-redux";

import LinkMain from "../components/Link/LinkMain";

const mapStateToProps = (state, { history }) => {
  return {
    lang: state.locale.lang,
    filter: state.filter,
    history: history
  };
};

export default connect(mapStateToProps)(LinkMain);
