// @flow

import { SET_FILTER } from "../actions";

type State = string;
type Action = { type: "SET_FILTER", filter: string };

function filter(state: State = "", action: Action): State {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default filter;
