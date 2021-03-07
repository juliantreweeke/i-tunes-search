import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import actions from "../store/Actions/index";

const useAlbum = () => {
  const dispatch = useDispatch();

  const album = useSelector((state) => state.album);

  const parseAlbum = useCallback(
    (data) => dispatch(actions.albumActions.parseAlbum(data)),
    [dispatch]
  );

  return {
    album,
    parseAlbum,
  };
};

export default useAlbum;