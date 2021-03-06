import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import actions from "../store/Actions/index";

const useAlbums = () => {
  const dispatch = useDispatch();

  const albums = useSelector((state) => state.albums.storedAlbums);

  const displayedAlbums = useSelector((state) => state.albums.displayedAlbums);

  const setAlbums = useCallback(
    (data) => dispatch(actions.albumsActions.setAlbums(data)),
    [dispatch]
  );

  const setDisplayedAlbums = useCallback(
    (data) => dispatch(actions.albumsActions.setDisplayedAlbums(data)),
    [dispatch]
  );

  return {
    albums,
    displayedAlbums,
    setAlbums,
    setDisplayedAlbums,
  };
};

export default useAlbums;