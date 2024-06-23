import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { CONFIG_DEFAULT_PATH, CONFIG_INIT_PATH } from '../config/system.js'
import { join } from 'node:path'

const path = CONFIG_INIT_PATH

const pathDef = CONFIG_DEFAULT_PATH

// 得到文件
const files = readdirSync(pathDef).filter(file => file.endsWith('.yaml'))
//
mkdirSync(join(process.cwd(), path), {
  recursive: true
})
//
for (const file of files) {
  if (!existsSync(`${path}${file}`)) {
    copyFileSync(`${pathDef}${file}`, `${path}${file}`)
  }
}

const exists = ['data', 'resources', 'plugins']

for (const item of exists) {
  if (!existsSync(item)) {
    mkdirSync(item, {
      recursive: true
    })
  }
}
