import React from 'react'
import { Picture } from 'yunzai/utils'
import * as hello from './views/hello.tsx'
import { createDynamicComponent } from 'yunzai/utils'
const dynamic = createDynamicComponent(import.meta.url)
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
      html_name: `${uid}.html`
    })
    return this.Pup.render(Address)
  }

}
// 初始化 图片生成对象
export const imgae = new Image()