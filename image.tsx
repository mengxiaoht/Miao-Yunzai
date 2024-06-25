import React from 'react'
import { dirname, join } from 'path'
import { createDynamicComponent, Picture } from 'yunzai/utils'
import { createRequire } from 'module'
//
import * as hello from './views/hello.tsx'
import ImageComponent from './views/image.tsx'
//
const dynamic = createDynamicComponent(import.meta.url)
const require = createRequire(import.meta.url)

// 别名路径
export const paths = {
  // 定位自身的 md文件，并获取目录地址
  "@example": dirname(require("./README.md")),
  // 定位resources资源
  "@resources": join(dirname(require("./README.md")), "resources"),
}

// 携带了别名的资源
export const files = {
  //
  'hello': [require("./resources/css/example.main.css")]
}

export class Image extends Picture {
  constructor() {
    super()

    // start
    this.Pup.start()
  }

  /**
   * 为指定用户生成html 生成指定数据下的html文件
   * @param uid 用户编号
   * @param Props 组件参数
   * @returns
   */
  async createHello(uid: number, Props: Parameters<typeof hello.default>[0]) {
    const Hello = (await dynamic<typeof hello>('./views/hello.tsx')).default
    // 生成 html 地址 或 html字符串
    const Address = this.Com.create(<Hello {...Props} />, {
      // html/hello/uid.html
      join_dir: 'hello',
      html_name: `${uid}.html`,
      // 植入其他元素
      html_body: this.Com.render(<ImageComponent />),
      // 设置带有别名的资源
      html_files: files.hello,
      // 设置别名
      file_paths: paths,
    })
    return this.Pup.render(Address)
  }

  /**
   * 
   */
}

// 初始化 图片生成对象
export const imgae = new Image()