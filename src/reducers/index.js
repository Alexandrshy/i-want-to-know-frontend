// @flow

import { combineReducers } from 'redux';

import locale from './locale';
import books from './books';
import tags from './tags';

const reducer = combineReducers({
    locale,
    books,
    tags
});

export default reducer;