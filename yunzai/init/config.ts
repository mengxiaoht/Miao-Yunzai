import { copyFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { CONFIG_DEFAULT_PATH, CONFIG_INIT_PATH } from '../config/system.js'
import { join } from 'node:path'

// 得到文件
const files = readdirSync(CONFIG_DEFAULT_PATH).filter(file =>
  file.endsWith('.yaml')
)

//
mkdirSync(join(process.cwd(), CONFIG_INIT_PATH), {
  recursive: true
})

//
for (const file of files) {
  if (!existsSync(`${CONFIG_INIT_PATH}${file}`)) {
    copyFileSync(`${CONFIG_DEFAULT_PATH}${file}`, `${CONFIG_INIT_PATH}${file}`)
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
