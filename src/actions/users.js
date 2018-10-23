// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// mappers
// import postMapper from '../mappers/post'

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
  console.log(users)
  dispatch(actions.users.request())

  try {
    dispatch(
      actions.users.success({
        items: users,
      }),
    )
  } catch (e) {
    dispatch(actions.users.error({ error: e }))
    console.log(e)
  }
}
