// reducer
import reducer, { initialState } from '../clients'
import actions from '../../actions/clients'

// data
import data from '../../clients.json'

console.log('actions', actions)

describe('client reducer', () => {
  it('has initial state', () => {
    const initialState = reducer(undefined, { type: undefined })
    expect(initialState).not.toBeNull()
  })

  it('handles "actions.clients.success" action', () => {
    const items = data.slice(0, 1)
    const expected = {
      ...initialState,
      items: items,
    }

    const actual = reducer(undefined, {
      type: actions.clients.success,
      payload: {
        clients: items,
      },
    })

    expect(actual.items).toHaveLength(1)
    expect(actual).toEqual(expected)
  })

  it('handles "actions.clients.error" action', () => {
    const errorText = 'TEST ERROR'
    const expected = {
      ...initialState,
      error: errorText,
    }

    const actual = reducer(undefined, {
      type: actions.clients.error,
      payload: {
        error: errorText,
      },
    })

    expect(actual).toEqual(expected)
  })

  it('handles "actions.clients.filter.success" action', () => {
    const items = data.slice(0, 5)
    const expected = {
      ...initialState,
      result: items,
    }

    const actual = reducer(undefined, {
      type: actions.clients.filter.success,
      payload: {
        result: items,
      },
    })

    expect(actual).toEqual(expected)
  })

  it('handles "actions.clients.filter.error" action', () => {
    const errorText = 'TEST FILTER ERROR'
    const expected = {
      ...initialState,
      error: errorText,
    }

    const actual = reducer(undefined, {
      type: actions.clients.filter.error,
      payload: {
        error: errorText,
      },
    })

    expect(actual).toEqual(expected)
  })
})
