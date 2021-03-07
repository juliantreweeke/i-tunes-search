import { SET_ALBUM } from "../Types";

export const album = (state = [], action) => {
  switch (action.type) {
    case SET_ALBUM:
      return action.payload.data;
    default:
      return state;
  }
};
