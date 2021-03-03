import { SET_SEARCH_QUERY } from "../Types";

export const searchQuery = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload.data;
    default:
      return state;
  }
};
