import { H3Event } from 'h3'

import { createRandomString } from '$/helpers'

const cookieName = 'session'
const users = new Map<string, number>()

export const getUserBySession = (event: H3Event) => {
  const session = getCookie(event, cookieName) || ''

  const existingUser = users.get(session)

  if (existingUser) {
    return existingUser
  }

  const newUser = Math.random() * 1e6
  const sessionKey = createRandomString(16)

  users.set(sessionKey, newUser)

  setCookie(event, cookieName, sessionKey)

  return newUser
}
