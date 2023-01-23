import {
  requestNewGame,
  requestDeleteGame,
  requestPlayerState,
} from '../api/game-requests'

export const usePlayerState = defineStore('player-state', () => {
  const gameId = ref('')

  const fetchData = async () => {
    gameId.value = await requestPlayerState()
  }

  const createGame = async () => {
    gameId.value = await requestNewGame()
  }

  const cancelGame = async () => {
    await requestDeleteGame()

    gameId.value = ''
  }

  return {
    gameId,
    fetchData,
    createGame,
    cancelGame,
  }
})
