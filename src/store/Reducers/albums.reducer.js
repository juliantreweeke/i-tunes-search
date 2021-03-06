import { SET_DISPLAYED_ALBUMS, SET_ALBUMS } from "../Types";
import { DEFAULT_ALBUMS_TO_DISPLAY } from "../../constants";

export const albums = (
  state = {},
  action
) => {
  switch (action.type) {
    case SET_ALBUMS:
      return {
        ...state,
        storedAlbums: action.payload.data,
        displayedAlbums: action.payload.data.splice(0, DEFAULT_ALBUMS_TO_DISPLAY),
        numberOfAlbumsToDisplay: (DEFAULT_ALBUMS_TO_DISPLAY * 2)
      };
    case SET_DISPLAYED_ALBUMS:
      const updatedAlbumList = state.storedAlbums.splice(
        0,
        state.numberOfAlbumsToDisplay
      );
      return {
        ...state,
        displayedAlbums: updatedAlbumList,
        numberOfAlbumsToDisplay: (state.numberOfAlbumsToDisplay * 2)
      };
    default:
      return state;
  }
};
