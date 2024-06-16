import React from "react"
import Hello from "./views/hello.tsx"
import Music from './views/music.tsx'
import { createRequire } from 'module'
const require  = createRequire(import.meta.url)
const image: string = require('./resources/example.png')
const movies = [
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
const Config = [
  {
    url: "/hello",
    element: <Hello data={{ name: "word" }} movies={movies} />
  },
  {
    url: "/music",
    element: <Music />
  }
]
export default Config