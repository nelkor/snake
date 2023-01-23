import { SsrCheck } from '#/types'

export const checkSourceData = async (path: string): Promise<SsrCheck> => {
  const { data } = await useFetch<SsrCheck>(`/api/ssr-check?path=${path}`, {
    headers: useRequestHeaders() as Record<string, string>,
  })

  if (!data.value) {
    throw new Error('ssr-check has been failed')
  }

  return data.value
}

export const postInit = (gameId: string) => {
  fetch('/api/init', {
    method: 'POST',
    body: JSON.stringify({ gameId }),
  }).then()
}
