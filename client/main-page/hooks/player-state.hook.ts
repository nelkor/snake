import { PlayerState } from '#/types'

export const usePlayerState = async () => {
  const { data } = await useFetch<PlayerState>('/api/player-state', {
    headers: useRequestHeaders() as Record<string, string>,
  })

  const gameId = ref(data.value?.gameId || '')

  const createGame = (id: string) => {
    gameId.value = id
  }

  const deleteGame = () => {
    gameId.value = ''
  }

  return {
    gameId,
    createGame,
    deleteGame,
  }
}
