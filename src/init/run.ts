import { join } from 'path'
import { createRequire } from 'module'
import { existsSync } from 'fs'
import pm2 from 'pm2'
const require = createRequire(import.meta.url)
/**
 * 校验运行
 * @returns
 */
export function checkRun() {
  return new Promise((resolve, reject) => {
    if (process.argv[1].includes('pm2')) {
      resolve(true)
    }
    if (process.argv[1].includes('test')) {
      resolve(true)
    }
    // 不是生产运行
    if (process.env.NODE_ENV != 'production') {
      const dir = join(process.cwd(), 'pm2.config.cjs')
      if (!existsSync(dir)) {
        reject(false)
      }
      const cfg = require('../../pm2.config.cjs')
      pm2.connect(err => {
        if (err) {
          reject(err)
          return
        }
        //
        pm2.list((err, processList) => {
          if (err) {
            pm2.disconnect()
            reject(err)
            return
          }
          const app = processList.find(p => p.name === cfg.apps[0].name)
          if (app && app.pm2_env.status === 'online') {
            console.log('检测到后台正在运行')
            // 关闭
            pm2.stop(cfg.apps[0].name, err => {
              if (err) {
                reject(err)
              } else {
                console.log('已停止后台进程，防止重复运行')
              }
              pm2.disconnect()
              resolve(true)
            })
          } else {
            // 断开连接
            pm2.disconnect()
            resolve(true)
          }
        })
      })
    } else {
      resolve(true)
    }
  })
}
await checkRun().catch(err => {
  // 打印错误
  console.error(err)
  // 关闭进程
  process.exit(2)
})
