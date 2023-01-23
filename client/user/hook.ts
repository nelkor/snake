import { useUser } from './store'
import { postInit } from './api'

export const useEntrypoint = async () => {
  const user = useUser()

  // Только на сервере
  if (process.server) {
    const replacePath = await user.fetchSourceData(useRoute().path)

    if (replacePath) {
      await useRouter().replace(replacePath)
    }
  }

  // Только на клиенте
  if (process.client && !user.isAuthorized) {
    postInit(user.gameId)
  }
}
