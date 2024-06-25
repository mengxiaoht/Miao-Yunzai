import React from 'react'
import { createRequire } from 'module'
import { createDynamicComponent, Component } from 'yunzai/utils'
import { type RouterType } from 'yunzai/image'
import { paths, files } from './image'
import ImageComponent from './views/image'
const dynamic = createDynamicComponent(import.meta.url)
const require = createRequire(import.meta.url)
// router会被重复执行，此处组件变成动态组件
const Hello = (await dynamic('./views/hello.tsx')).default
const Music = (await dynamic('./views/music.tsx')).default
// 组件解析器
const component = new Component()
// 路由
const Config: RouterType = [
  {
    url: '/hello',
    element: <Hello data={{ name: 'word' }} movies={[
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
    ]} />,
    options: {
      // 设置别名地址
      file_paths: paths,
      // 植入资源
      html_body: component.render(<ImageComponent />),
      // 别名资源
      html_files: files.hello,
    }
  },
  {
    url: '/music',
    element: <Music />
  }
]
export default Config
