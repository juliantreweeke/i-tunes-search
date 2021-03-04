import { SET_ALBUMS } from "../Types";

export const albums = (state = [], action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return action.payload.data;
    default:
      return state;
  }
};
