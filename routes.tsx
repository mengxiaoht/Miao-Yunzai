import React from "react"
import { type RouterType } from "yunzai/image/types"
import Hello from "./views/hello.tsx"
import Music from "./views/music.tsx"
import { createRequire } from 'yunzai/utils'
const require = createRequire(import.meta.url)
const movies  = [
  {
    id: 0,
    image: require('./resources/example.png'),
    title: 'Prognosis Negative',
    starRating: '2.66',
    rating: 'PG-13',
    year: '2021',
    genre: 'Comedy',
    runtime: '1h 46m',
    cast: 'Simon Pegg, Zach Galifianakis  '
  }
]
const Config: RouterType = [
  {
    url: "/",
    element: <Hello data={{ name: "word" }} movies={movies} />
  },
  {
    url: "/music",
    element:  <Music />
  }
]
export default Config