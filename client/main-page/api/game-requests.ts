const path = '/api/game'

export const requestNewGame = () =>
  fetch(path, { method: 'POST' }).then(res => res.text())

export const requestDeleteGame = () => fetch(path, { method: 'DELETE' })
