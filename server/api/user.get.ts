import { UserState } from '#/types'
import { getUserBySession } from '$/sessions'

export default defineEventHandler<UserState>(event => {
  console.log('--- user ---')
  console.log(getQuery(event))

  return getUserBySession(event)
})
