import React from 'react'
import { movies } from './data'
import { createDynamic } from 'yunzai/utils'
const require = createDynamic(import.meta.url)
const Hello = (await require('./views/hello.tsx')).default
const Music = (await require('./views/music.tsx')).default
const Config = [
  {
    url: '/hello',
    element: <Hello data={{ name: 'word' }} movies={movies} />
  },
  {
    url: '/music',
    element: <Music />
  }
]
export default Config
