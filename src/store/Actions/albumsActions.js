import {
  SET_ALBUMS,
  SET_DISPLAYED_ALBUMS,
  SET_ALBUM_STATE_FROM_STORAGE,
} from "../Types";
import { sessionStore } from "../../utils/storage";
import { SESSION_STORAGE_KEYS } from "../../constants";

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

const setAlbumStateFromStorage = () => {
  const sessionAlbumToFocus = sessionStore.getItem(SESSION_STORAGE_KEYS.album);

  if (sessionAlbumToFocus) {
    const data = Number(sessionAlbumToFocus);
    sessionStore.removeItem(SESSION_STORAGE_KEYS.album);
    return {
      type: SET_ALBUM_STATE_FROM_STORAGE,
      payload: {
        data,
      },
    };
  }
  return {
    type: SET_ALBUM_STATE_FROM_STORAGE,
    payload: {},
  };
};

const albumsActions = {
  setAlbums,
  setDisplayedAlbums,
  setAlbumStateFromStorage,
};

export default albumsActions;
