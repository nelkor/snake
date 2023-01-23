import { checkSourceData } from './api'

export const useUser = defineStore('user', () => {
  const isAuthorized = ref(false)
  const gameId = ref('')
  const role = ref(0)

  const fetchSourceData = async (path: string) => {
    const sourceData = await checkSourceData(path)

    gameId.value = sourceData.gameId
    role.value = sourceData.role
    isAuthorized.value = sourceData.isAuthorized

    return sourceData.replacePath
  }

  return {
    gameId,
    role,
    isAuthorized,
    fetchSourceData,
  }
})
