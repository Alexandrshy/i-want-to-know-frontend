// @flow

import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => {
    return {
        lang: state.locale.lang
    }
}

export default connect(mapStateToProps)(App);