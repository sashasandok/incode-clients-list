import { createSelector } from 'reselect'

export const getClientList = ({ clients }) => clients.items || {}
export const getClientById = id =>
  createSelector(getClientList, clients => clients.find(i => i.id === id))

export const getClientSearchResult = ({ clients }) => clients.result || ''
export const clientSearchResult = value =>
  createSelector(getClientSearchResult, clients => clients.result + value)
