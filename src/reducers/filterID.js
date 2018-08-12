// @flow

import { SET_FILTER_ID } from "../actions";

type State = Array<string>;
type Action = { type: "SET_FILTER_ID", filterID: Array<string> };

function filterID(state: State = [], action: Action): State {
  switch (action.type) {
    case SET_FILTER_ID:
      return action.filterID;

    default:
      return state;
  }
}

export default filterID;
