import { useDispatch, useSelector } from "react-redux"
import { useCallback } from "react"
import actions from '../store/Actions/index';

const useError = () => {
  const dispatch = useDispatch()

  const error = useSelector(state => state.error);

  const setError = useCallback(
    (error) => dispatch(actions.errorActions.setError(error)),
    [dispatch]
  )
  return {
    error,
    setError
  }
}

export default useError;