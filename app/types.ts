export interface SsrCheck {
  isAuthorized: boolean
  gameId: string
  role: 0 | 1 | 2
  replacePath: string
}
