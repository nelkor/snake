import { randomInt } from 'crypto'

const createLettersRow = (length: number, start: number) =>
  Array.from({ length }, (_, i) => String.fromCharCode(start + i))

const letters = [
  ...createLettersRow(10, 48),
  ...createLettersRow(26, 65),
  ...createLettersRow(26, 97),
]

const getRandomLetter = () => letters[randomInt(letters.length)]

export const createRandomString = (length: number) =>
  Array.from({ length }, getRandomLetter).join('')
