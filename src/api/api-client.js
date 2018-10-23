const apiBaseUrl = 'http://localhost:3200/'

const apiUrl = endpoint => apiBaseUrl + endpoint

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

export const get = endpoint =>
  fetch(apiUrl(endpoint), {
    method: 'GET',
    headers: headers
  }).then(response => response.json())

export const post = (endpoint, { ...args }, token) =>
  fetch(apiUrl(endpoint), {
    method: 'POST',
    headers: {
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: JSON.stringify(args)
  }).then(response => response.json())

export const put = (endpoint, { ...args }, token) =>
  fetch(apiUrl(endpoint), {
    method: 'PUT',
    headers: {
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` })
    },
    body: JSON.stringify(args)
  }).then(response => response.json())

export const del = (endpoint, token) =>
  fetch(apiUrl(endpoint), {
    method: 'DELETE',
    headers: {
      ...headers,
      ...(token && { Authorization: `Bearer ${token}` })
    }
  }).then(response => response.status === 200)
