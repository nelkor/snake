import { UserState } from '#/types'

import { requestUser } from './api'

export const useUser = defineStore('user', () => {
  const state = ref<UserState>(null)

  const fetchData = async (path: string) => {
    state.value = await requestUser(path)
  }

  const setState = (userState: UserState) => {
    state.value = userState
  }

  return {
    state,
    fetchData,
    setState,
  }
})
