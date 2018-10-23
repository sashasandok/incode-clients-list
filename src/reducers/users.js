// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/users'

export const initialState = {
  isFetching: false,
  error: '',
  users: [],
}

export default handleActions(
  {
    [actions.users.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.users.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      users: payload.users,
    }),

    [actions.users.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
