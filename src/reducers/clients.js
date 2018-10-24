// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/clients'

export const initialState = {
  isFetching: false,
  error: '',
  clients: [],
}

export default handleActions(
  {
    [actions.clients.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

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
  },
  initialState,
)
