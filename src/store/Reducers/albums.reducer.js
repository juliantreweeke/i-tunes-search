import {
  RESET_FOCUS_AND_DISPLAY_NUMBER,
  SET_ALBUM_FOCUS_FROM_STORAGE,
  SET_DISPLAYED_ALBUMS,
  SET_ALBUMS,
  SET_NUMBER_OF_ALBUMS_TO_DISPLAY,
} from "../Types";
import { DEFAULT_ALBUMS_TO_DISPLAY } from "../../constants";

export const albums = (state = {}, action) => {
  switch (action.type) {
    case RESET_FOCUS_AND_DISPLAY_NUMBER:
      return {
        ...state,
        albumToFocus: null,
        numberOfAlbumsToDisplay: DEFAULT_ALBUMS_TO_DISPLAY,
      };
    case SET_NUMBER_OF_ALBUMS_TO_DISPLAY:
      return {
        ...state,
        numberOfAlbumsToDisplay:
          action.payload.data || DEFAULT_ALBUMS_TO_DISPLAY,
      };
    case SET_ALBUMS:
      return {
        ...state,
        storedAlbums: action.payload.data,
        displayedAlbums: [
          ...action.payload.data.slice(0, state.numberOfAlbumsToDisplay),
        ],
        numberOfAlbumsToDisplay: state.numberOfAlbumsToDisplay * 2,
      };
    case SET_ALBUM_FOCUS_FROM_STORAGE:
      return {
        ...state,
        albumToFocus: action.payload.data,
      };
    case SET_DISPLAYED_ALBUMS:
      return {
        ...state,
        displayedAlbums: [
          ...state.storedAlbums.slice(0, state.numberOfAlbumsToDisplay),
        ],
        numberOfAlbumsToDisplay: state.numberOfAlbumsToDisplay * 2,
      };
    default:
      return state;
  }
};
