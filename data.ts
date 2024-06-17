import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const image: string = require('./resources/example.png')
export const movies = [
  {
    id: 0,
    image: image,
    title: 'Prognosis Negative',
    starRating: '2.66',
    rating: 'PG-13',
    year: '2021',
    genre: 'Comedy',
    runtime: '1h 46m',
    cast: 'Simon Pegg, Zach Galifianakis  '
  }
]