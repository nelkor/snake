import { PlayerState } from '#/types'

const path = '/api/game'

export const requestNewGame = () =>
  fetch(path, { method: 'POST' }).then(res => res.text())

export const requestDeleteGame = () => fetch(path, { method: 'DELETE' })

export const requestPlayerState = async () => {
  const { data } = await useFetch<PlayerState>('/api/player-state', {
    headers: useRequestHeaders() as Record<string, string>,
  })

  return data.value?.gameId || ''
}
