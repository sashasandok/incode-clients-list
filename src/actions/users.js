// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// data
import users from '../clients.json'

const actions = createActions({
  users: {
    request: x => x,
    success: x => x,
    error: x => x,
  },
})

export default actions

export const getUsers = () => async dispatch => {
  try {
    dispatch(
      actions.users.success({
        users: users,
      }),
    )
  } catch (e) {
    dispatch(actions.users.error({ error: e }))
    console.log(e)
  }
}
