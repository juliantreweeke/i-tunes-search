import { SET_SEARCH_QUERY } from "../Types";

const setSearchQuery = (data) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: {
      data,
    },
  };
};

const searchQueryActions = {
  setSearchQuery,
}

export default searchQueryActions;
