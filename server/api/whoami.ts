import { getUserBySession } from '$/sessions'

export default defineEventHandler<number>(event => getUserBySession(event))
