// @flow

export const SET_FILTER = "SET_FILTER";

export function setFilter(filter: string) {
  return {
    type: SET_FILTER,
    filter
  };
}
