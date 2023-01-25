import { UserState } from '#/types'

export const requestUser = async (path: string) => {
  const { data } = await useFetch<UserState>(`/api/user?path=${path}`, {
    headers: useRequestHeaders() as Record<string, string>,
  })

  return data.value
}
