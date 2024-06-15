import React from 'react'
import Nav from './component/Nav.tsx'
import NavItem from './component/NavItem.tsx'
import List from './component/List.tsx'
import ListItem, { MovieType } from './component/ListItem.tsx'
export type DataType = {
  name: string
}
export type PropsType = {
  data: DataType
  movies:MovieType[]
}
export default function App({ data, movies }: PropsType) {
  return (
    <div className="divide-y divide-slate-100  m-8 shadow-2xl">
    <Nav>
      <NavItem href="./new" >New {data.name}</NavItem>
    </Nav>
    <List>
      {movies.map((movie) => (
        <ListItem key={movie.id} movie={movie} />
      ))}
    </List>
  </div>
  )
}