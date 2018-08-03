// @flow

import { SELECT_TAG } from "../actions";

type State = boolean;
type Action = { type: "SELECT_TAG", id: number };

function tags(state: State = false, action: Action): State {
  switch (action.type) {
    case SELECT_TAG:
      const tag = state.map(tag => {
        if (tag.id !== action.id) {
          return tag;
        }

        return Object.assign({}, tag, {
          tagSelected: !tag.tagSelected
        });
      });
      return tag;

    default:
      return state;
  }
}

export default tags;
