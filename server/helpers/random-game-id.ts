import { randomInt } from 'crypto'

export const generateIdForGame = () => {
  const lcString = randomInt(3e12, 1e14).toString(36)

  return lcString
    .split('')
    .map(letter => (Math.random() < 0.5 ? letter : letter.toUpperCase()))
    .join('')
}
