import React from 'react'
import Nav from '../component/Nav.tsx'
import NavItem from '../component/NavItem.tsx'
import List from '../component/List.tsx'
import ListItem, { MovieType } from '../component/ListItem.tsx'
export type DataType = {
  name: string
}
export type PropsType = {
  data: DataType
  movies:MovieType[]
}
import { createRequire } from 'yunzai/utils'
const require = createRequire(import.meta.url)
export default function App({ data, movies }: PropsType) {
  const url  = require('../resources/example.png')
  return (
    <div className="divide-y divide-slate-100  m-8 shadow-2xl">
      <img className='h-40 w-40' src={url}></img>
    <Nav>
      {
        // 前往 / music路由
      }
      <NavItem href="./music" >New {data.name}</NavItem>
    </Nav>
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </List>
  </div>
  )
}