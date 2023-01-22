import { PlayerState } from '#/types'

export default defineEventHandler<PlayerState>(event => {
  const gameId = getCookie(event, 'game-id')

  return { gameId }
})
