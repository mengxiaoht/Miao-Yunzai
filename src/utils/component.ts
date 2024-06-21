import React from 'react'
import { renderToString } from 'react-dom/server'
import { mkdirSync, writeFileSync } from 'fs'
import { join } from 'path'
import { getLink } from './link.tsx'
import { replacePaths } from './replace.ts'
/**
 *
 */
export type ComponentCreateOpsionType = {
  /**
   * 扩展路径
   */
  join_dir?: string
  /**
   *生成的文件名
   */
  html_name?: string
  /***
   * 是否保存并返回地址
   * 默认 true
   */
  file_create?: boolean
  /**
   * 插入头部的内容
   */
  html_head?: string
  /**
   * 底部插入的内容
   */
  html_body?: string
}

/**
 * ************
 * 组件解析
 * **********
 */
export class Component {
  #Link = getLink()
  #dir = ''
  /**
   *
   */
  constructor() {
    this.#dir = join(process.cwd(), 'html')
    mkdirSync(this.#dir, {
      recursive: true
    })
  }

  /**
   * 渲染字符串
   * @param element
   * @param name
   * @returns
   */
  create(element: React.ReactNode, options: ComponentCreateOpsionType) {
    const str = renderToString(element)
    const dir = join(this.#dir, options?.join_dir ?? '')
    mkdirSync(dir, { recursive: true })
    const address = join(dir, options?.html_name ?? 'hello.html')
    const DOCTYPE = '<!DOCTYPE html>'
    const head = `<head>${this.#Link}${options?.html_head ?? ''}</head>`
    const body = `<body>${str}${options?.html_body ?? ''}</body>`
    const html = `${DOCTYPE}<html>${head}${body}</html>`
    if (
      typeof options?.file_create == 'boolean' &&
      options?.file_create == false
    ) {
      return html
    }
    writeFileSync(address, this.replacePaths(html))
    return address
  }

  /**
   * 路径格式转换
   * @param htmlContent
   * @returns
   */
  replacePaths = replacePaths

  /**
   * 将 React 元素渲染为其初始 HTML。这
   * 应该只在服务器上使用。
   * React 将返回一个 HTML 字符串。
   * 您可以使用此方法在服务器上生成 HTML 并在初始请求上发送标记，
   * 以加快页面加载速度并允许搜索 出
   * 于 SEO 目的而抓取您的页面的引擎。
   * 如果你打电话ReactDOMClient.hydrateRoot()在已经具有此服务器渲染标记的节点上，
   * React 将保留它并仅附加事件处理程序，允许您 获得非常高性能的首次加载体验。
   */
  render = renderToString
}
