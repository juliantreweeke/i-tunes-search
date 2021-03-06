import {
  SET_ALBUMS,
  SET_DISPLAYED_ALBUMS,
  SET_ALBUM_FOCUS_FROM_STORAGE,
  SET_NUMBER_OF_ALBUMS_TO_DISPLAY,
} from "../Types";
import { sessionStore } from "../../utils/storage";
import { SESSION_STORAGE_KEYS } from "../../constants";
import { 
  formatDateString, 
  truncateString,
  resizeITunesImageURL
} from "../../helpers/helpers";
  
const parseAlbums = (data) => {
  return (dispatch) => {
    const parsedData = data.map((album) => {
      return {
        url: `/album/${album.collectionId}`,
        image: resizeITunesImageURL(album.artworkUrl100, 250),
        heading: truncateString(album.collectionName),
        text: truncateString(album.artistName),
        detail: formatDateString(album.releaseDate),
      }
    })
    dispatch(setAlbums(parsedData));
  };
}

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

const setNumberOfAlbumsToDisplay = () => {
  const sessionNumberOfAlbumsToDisplay = sessionStore.getItem(
    SESSION_STORAGE_KEYS.albumsToDisplay
  );

  if (sessionNumberOfAlbumsToDisplay) {
    const data = Number(sessionNumberOfAlbumsToDisplay);
    sessionStore.removeItem(SESSION_STORAGE_KEYS.albumsToDisplay);
    return {
      type: SET_NUMBER_OF_ALBUMS_TO_DISPLAY,
      payload: {
        data,
      },
    };
  }

  return {
    type: SET_NUMBER_OF_ALBUMS_TO_DISPLAY,
    payload: {},
  };
};

const setAlbumFocusFromStorage = () => {
  const sessionAlbumToFocus = sessionStore.getItem(SESSION_STORAGE_KEYS.album);
  if (sessionAlbumToFocus) {
    const data = Number(sessionAlbumToFocus);
    sessionStore.removeItem(SESSION_STORAGE_KEYS.album);
    return {
      type: SET_ALBUM_FOCUS_FROM_STORAGE,
      payload: {
        data,
      },
    };
  }

  return {
    type: SET_ALBUM_FOCUS_FROM_STORAGE,
    payload: {},
  };
};

const albumsActions = {
  parseAlbums,
  setAlbums,
  setAlbumFocusFromStorage,
  setDisplayedAlbums,
  setNumberOfAlbumsToDisplay,
};

export default albumsActions;
