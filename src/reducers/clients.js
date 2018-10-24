// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/clients'

export const initialState = {
  isFetching: false,
  error: '',
  clients: [],
  result: '',
}

export default handleActions(
  {
    [actions.clients.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      clients: payload.clients,
    }),

    [actions.clients.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    [actions.clients.filter.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      result: payload.result,
    }),

    [actions.clients.filter.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
