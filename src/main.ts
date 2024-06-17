import 'yunzai/init'
import { Client } from 'yunzai/core'
import { createQQ } from './qq.js'
/**
 * 确保所有微任务做好准备后
 * 再进行宏任务
 */
setTimeout(async () => {
  await createQQ()
  /**
   * run
   */
  await Client.run().then(async () => {
    /**
     * Loader
     */
    await Client.PluginsLoader()
  })
}, 0)
