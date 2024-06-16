import React from 'react'
import Nav from '../component/Nav.tsx'
import NavItem from '../component/NavItem.tsx'
import List from '../component/List.tsx'
import ListItem, { MovieType } from '../component/ListItem.tsx'
import { createRequire } from 'module'

export type DataType = {
  name: string
}

export type PropsType = {
  data: DataType
  movies: MovieType[]
}

const require = createRequire(import.meta.url)
const url: string = require('../resources/example.png')

/**
 * 
 * @param param0 
 * @returns 
 */
export default function App({ data, movies }: PropsType) {
  return (
    <div className="divide-y divide-slate-100  m-8 shadow-2xl">
      <img className='h-40 w-40' src={url}></img>
      <Nav>
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