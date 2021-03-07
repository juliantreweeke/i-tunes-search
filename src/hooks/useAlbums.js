import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import actions from "../store/Actions/index";

const useAlbums = () => {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.storedAlbums);

  const albumToFocus = useSelector((state) => state.albums.albumToFocus);

  const displayedAlbums = useSelector((state) => state.albums.displayedAlbums);

  const parseAlbums = useCallback(
    (data) => dispatch(actions.albumsActions.parseAlbums(data)),
    [dispatch]
  );

  const initAlbums = useCallback(
    () => dispatch(actions.albumsActions.initAlbums()),
    [dispatch]
  );

  const resetFocusAndDisplayNumber = useCallback(
    () => dispatch(actions.albumsActions.resetFocusAndDisplayNumber()),
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
    initAlbums,
    parseAlbums,
    resetFocusAndDisplayNumber,
    setDisplayedAlbums,
  };
};

export default useAlbums;


