// @flow

import { combineReducers } from "redux";

import locale from "./locale";
import books from "./books";
import tags from "./tags";
import filter from "./filter";
import filterID from "./filterID";

const reducer = combineReducers({
  locale,
  books,
  tags,
  filter,
  filterID
});

export default reducer;
