import React from 'react'
import { movies } from './data'
import { createDynamicComponent } from 'yunzai/utils'
const dynamic = createDynamicComponent(import.meta.url)
const Hello = (await dynamic('./views/hello.tsx')).default
const Music = (await dynamic('./views/music.tsx')).default
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
