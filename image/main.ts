import '../src/init/config.js'
import '../src/init/logger.js'
import '../src/init/redis.js'
import './tailwindcss.js'
import Koa from 'koa'
import KoaStatic from 'koa-static'
import Router from 'koa-router'
import { Component, createRequire } from 'yunzai/utils'
import { readdirSync } from 'fs'
import { join } from 'path'
import mount from 'koa-mount'
const require = createRequire(import.meta.url)

const Com = new Component()
const app = new Koa()
const router = new Router()
const Port = 8080
const PATH = process.cwd()

// 得到plugins目录
const flies = readdirSync(join(process.cwd(), 'plugins'), {
  withFileTypes: true
}).filter(flie => !flie.isFile())

// 解析路由
for (const flie of flies) {
  const dir = flie?.path ?? flie?.parentPath
  if (!dir) {
    console.log('flie.name', flie.name, '识别错误')
    continue
  }
  const plugins = readdirSync(join(dir, flie.name), {
    withFileTypes: true
  }).filter(flie => flie.isFile())
  for (const plugin of plugins) {
    if (/^(routes.jsx|routes.tsx)$/.test(plugin.name)) {
      const routes = (await import(`file://${join(plugin.path, plugin.name)}`))
        ?.default
      if (!routes) continue
      if (Array.isArray(routes)) {
        for (const item of routes) {
          const url = `/${flie.name}${item.url}`
          console.log(`http://127.0.0.1:${Port}${url}`)
          const options = item?.options ?? {}
          router.get(url, ctx => {
            const href = require('../public/output.css')
            const HTML = Com.create(item.element, {
              ...options,
              html_head: `${options?.html_head ?? ''}<link rel="stylesheet" href="${href}">`,
              file_create: false
            })
            // 转义路径中的所有反斜杠
            const escapedPath = PATH.replace(/\\/g, '\\\\')
            // 创建一个正则表达式，'g' 表示全局匹配
            const regex = new RegExp(escapedPath, 'g')
            ctx.body = HTML.replace(regex, '/file')
          })
        }
      }
    }
  }
}

// static
app.use(mount('/file', KoaStatic(PATH)))

// routes
app.use(router.routes())

// listen 8000
app.listen(Port, () => {
  console.log('Server is running on port ' + Port)
  console.log('自行调整BOT浏览器尺寸 753 X 1180')
})
