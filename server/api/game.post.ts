import { generateIdForGame } from '$/games'
import { getUserBySession, setUserState } from '$/sessions'
import { UserState } from '#/types'

export default defineEventHandler<UserState>(event => {
  const user = getUserBySession(event)

  if (user) {
    return null
  }

  const newUserState: UserState = {
    gameId: generateIdForGame(),
    role: 0,
  }

  setUserState(event, newUserState)

  return newUserState
})
