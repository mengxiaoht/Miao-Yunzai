import React from "react"
import { type RouterType } from "yunzai/image/types"
import Hello from "./hello.tsx"

const movies  = [
  {
    id: 0,
    image: 'https://t14.baidu.com/it/u=2426410956,1575157783&fm=58&app=83&size=w931&q=75&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000',
    title: 'Prognosis Negative',
    starRating: '2.66',
    rating: 'PG-13',
    year: '2021',
    genre: 'Comedy',
    runtime: '1h 46m',
    cast: 'Simon Pegg, Zach Galifianakis  '
  },
  {
    id: 0,
    image: 'https://t14.baidu.com/it/u=2426410956,1575157783&fm=58&app=83&size=w931&q=75&n=0&f=JPEG&fmt=auto&maxorilen2heic=2000000',
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
    url: "/new",
    element: <div>
        hello Word !
    </div>
  }
]
export default Config