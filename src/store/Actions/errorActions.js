import { SET_ERROR } from "../Types";

const setError = (data) => {
  return {
    type: SET_ERROR,
    payload: {
      data,
    },
  };
};

const errorActions = {
    setError,
}

export default errorActions;
