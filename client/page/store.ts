import { RouteLocationNormalized } from 'vue-router'

import { useUser } from '@/user'

export const usePage = defineStore('page', () => {
  const user = useUser()
  const router = useRouter()
  const route = useRoute()
  const gameId = ref('')

  const checkRoute = ({ path }: RouteLocationNormalized) => {
    const pathName = path.slice(1)

    // Если пользователь прямо сейчас в игре, ему недоступны другие экраны
    if (user.state) {
      const { state } = user

      if (pathName !== state.gameId) {
        gameId.value = state.gameId

        return { path: `/${state.gameId}` }
      }
    }

    // Если пользователь на невалидном пути — попадает в корень
    if (pathName && !/^[a-zA-Z0-9]{8}$/.test(pathName)) {
      gameId.value = ''

      return { path: '/' }
    }

    gameId.value = pathName

    return true
  }

  router.beforeEach(checkRoute)

  const guardResult = checkRoute(route)

  if (guardResult !== true) {
    router.replace(guardResult.path)
  }

  return { gameId }
})
