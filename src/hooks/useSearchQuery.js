import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import actions from '../store/Actions/index';

const useSearchQuery = () => {
  const dispatch = useDispatch()

  const searchQuery = useSelector(state => state.searchQuery);

  const setSearchQuery = useCallback(
    (query) => dispatch(actions.searchQueryActions.setSearchQuery(query)),
    [dispatch]
  )
  return {
    searchQuery,
    setSearchQuery
  }
}

export default useSearchQuery;