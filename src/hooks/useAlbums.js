import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import actions from "../store/Actions/index";

const useAlbums = () => {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.storedAlbums);

  const albumToFocus = useSelector((state) => state.albums.albumToFocus);

  const displayedAlbums = useSelector((state) => state.albums.displayedAlbums);

  const setAlbums = useCallback(
    (data) => dispatch(actions.albumsActions.setAlbums(data)),
    [dispatch]
  );

  const setAlbumFocusFromStorage = useCallback(
    (data) => dispatch(actions.albumsActions.setAlbumFocusFromStorage(data)),
    [dispatch]
  );

  const setNumberOfAlbumsToDisplay = useCallback(
    (data) => dispatch(actions.albumsActions.setNumberOfAlbumsToDisplay(data)),
    [dispatch]
  );

  const setDisplayedAlbums = useCallback(
    (data) => dispatch(actions.albumsActions.setDisplayedAlbums(data)),
    [dispatch]
  );

  return {
    albums,
    albumToFocus,
    displayedAlbums,
    setAlbums,
    setAlbumFocusFromStorage,
    setDisplayedAlbums,
    setNumberOfAlbumsToDisplay
  };
};

export default useAlbums;