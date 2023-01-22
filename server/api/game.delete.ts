export default defineEventHandler(event => {
  deleteCookie(event, 'game-id')
})
