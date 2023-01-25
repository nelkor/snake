import { UserState } from '#/types'

export const createGame = (): Promise<UserState> =>
  fetch('/api/game', { method: 'POST' }).then(res => res.json())
