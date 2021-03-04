import { SET_ALBUMS } from "../Types";

const setAlbums = (data) => {
  return {
    type: SET_ALBUMS,
    payload: {
      data,
    },
  };
};

const albumsActions = {
  setAlbums,
}

export default albumsActions;
