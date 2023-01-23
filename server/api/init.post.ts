import { createRandomString } from '$/helpers'

export default defineEventHandler(async event => {
  const { gameId } = await readBody<{ gameId: string }>(event)

  console.log('init', gameId || '-', Math.floor(performance.now()))

  const sessionKey = createRandomString(16)

  setCookie(event, 'session', sessionKey, {
    httpOnly: true,
    sameSite: 'lax',
  })

  return ''
})
