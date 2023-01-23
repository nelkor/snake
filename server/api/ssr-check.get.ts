import { SsrCheck } from '#/types'

export default defineEventHandler<SsrCheck>(event => {
  console.log('ssr-check', Math.floor(performance.now()))

  const session = getCookie(event, 'session') || ''
  const isAuthorized = Boolean(session)

  return {
    isAuthorized,
    gameId: '',
    role: 0,
    replacePath: '',
  }
})
