import { SET_ALBUMS, SET_DISPLAYED_ALBUMS } from "../Types";

const setAlbums = (data) => {
  return {
    type: SET_ALBUMS,
    payload: {
      data,
    },
  };
};

const setDisplayedAlbums = (data) => {
  return {
    type: SET_DISPLAYED_ALBUMS,
    payload: {
      data,
    },
  };
};

const albumsActions = {
  setAlbums,
  setDisplayedAlbums
}

export default albumsActions;
