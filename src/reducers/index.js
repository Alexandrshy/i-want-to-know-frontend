// @flow

import { combineReducers } from "redux";

import locale from "./locale";
import books from "./books";
import tags from "./tags";
import filter from "./filter";

const reducer = combineReducers({
  locale,
  books,
  tags,
  filter
});

export default reducer;
