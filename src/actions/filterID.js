// @flow

export const SET_FILTER_ID = "SET_FILTER_ID";

export function setFilterID(filterID: Array<string>) {
  return {
    type: SET_FILTER_ID,
    filterID
  };
}
