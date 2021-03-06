import { SET_ERROR } from "../Types";

export const error = (state = null, action) => {
  switch (action.type) {
    case SET_ERROR:
      if (!action.payload.data.message) {
        return "UNKNOWN_ERROR";
      }
      return action.payload.data.message;
    default:
      return state;
  }
};