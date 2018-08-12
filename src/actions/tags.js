// @flow

export const SELECT_TAG = "SELECT_TAG";

export function selectTag(id: number, value: boolean) {
  return {
    type: SELECT_TAG,
    id,
    value
  };
}
