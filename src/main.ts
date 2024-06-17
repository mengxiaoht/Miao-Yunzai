import 'yunzai/init'
import { Client, Bot as bot } from 'yunzai/core'
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
  await Client.run()

  console.log('bot', bot)
  console.log('Bot', Bot)

  /**
   * Loader
   */
  await Client.PluginsLoader()
}, 0)
