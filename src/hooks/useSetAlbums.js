import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import actions from '../store/Actions/index';

const useSetAlbums = () => {
  const dispatch = useDispatch()

  const albums = useSelector(state => state.albums);

  const setAlbums = useCallback(
    (data) => dispatch(actions.albumsActions.setAlbums(data)),
    [dispatch]
  )
  return {
    albums,
    setAlbums
  }
}

export default useSetAlbums;