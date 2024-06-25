import React, { type CSSProperties } from 'react'
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

//
const require = createRequire(import.meta.url)
//
const url: string = require('../resources/exp.png')
//
const styles: CSSProperties = {
  background: `url(${url})`,
  backgroundSize: '100% auto'
}

/**
 *
 * @param param0
 * @returns
 */
export default function App({ data, movies }: PropsType) {
  return (
    <section className="flex flex-col">
      <div className="divide-y divide-slate-100  m-8 shadow-2xl" style={styles}>
        <Nav>
          <NavItem href="./music">New {data.name}</NavItem>
        </Nav>
        <List>
          {movies.map(movie => (
            <ListItem key={movie.id} movie={movie} />
          ))}
        </List>
      </div>
    </section>
  )
}
