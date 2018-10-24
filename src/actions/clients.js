// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// data
import data from '../clients.json'

// mappers
import mapper from '../mappers/clients'

const actions = createActions({
  clients: {
    request: x => x,
    success: x => x,
    error: x => x,
  },
})

export default actions

export const getClients = () => async dispatch => {
  const clients = data.map(mapper)
  // console.log(clients)
  try {
    dispatch(
      actions.clients.success({
        clients: clients,
      }),
    )
  } catch (e) {
    dispatch(actions.clients.error({ error: e }))
    console.log(e)
  }
}
