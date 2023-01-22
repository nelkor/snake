import { generateIdForGame } from '$/helpers'

export default defineEventHandler(event => {
  const gameId = generateIdForGame()

  setCookie(event, 'game-id', gameId, {
    httpOnly: true,
    sameSite: 'lax',
  })

  return gameId
})
