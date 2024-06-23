import fs from 'node:fs'
const files = fs.readdirSync('./plugins/example/apps').filter(file => /(.js|.ts)$/.test(file))
const arr = []
files.forEach((file) => {
  arr.push(import(`./apps/${file}`))
})
const ret = await Promise.allSettled(arr)
const apps = {}
for (const i in files) {
  // 得到插件名
  const name = files[i].replace(/(.js|.ts)/, '')
  if (ret[i].status !== 'fulfilled') {
    logger.error(`载入插件错误：${logger.red(name)}`)
    continue
  }
  const key = Object.keys(ret[i].value)[0]
  apps[name] = ret[i].value[key]
}
export { apps }