import { H3Event } from 'h3'

import { UserState } from '#/types'
import { createRandomString } from '$/helpers'

const cookieName = 'session'
const users = new Map<string, UserState>()

export const getUserBySession = (event: H3Event) => {
  const session = getCookie(event, cookieName) || ''

  const existingUser = users.get(session)

  if (existingUser !== undefined) {
    return existingUser
  }

  const newUser = null
  const sessionKey = createRandomString(16)

  users.set(sessionKey, newUser)

  setCookie(event, cookieName, sessionKey, {
    httpOnly: true,
    sameSite: 'lax',
  })

  return newUser
}

export const setUserState = (event: H3Event, userState: UserState) => {
  const session = getCookie(event, cookieName) || ''

  if (session) {
    users.set(session, userState)

    console.log('+++')
    console.log(users)
  }
}
