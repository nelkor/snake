import { generateIdForGame } from '$/games'

export default defineEventHandler(event => {
  const gameId = generateIdForGame()

  setCookie(event, 'game-id', gameId, {
    httpOnly: true,
    sameSite: 'lax',
  })

  return gameId
})
