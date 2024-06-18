/**
 * **********
 * 配置读取工具
 * **********
 */
import cfg from '../config/config.js'
/**
 * **********
 * 监听
 * **********
 */
import ListenerLoader from './events.loader.js'
/**
 *
 */
import PluginsLoader from './plugins.loader.js'
/**
 * 扩展
 */
import { Client as IcqqClient } from 'icqq'
/**
 *
 */
export class Client extends IcqqClient {
  /**
   *
   * @param conf
   */
  constructor(conf) {
    /**
     *
     */
    super(conf)
  }

  /**
   * 登录机器人
   * @returns
   */
  static async run() {
    const bot = new Client(cfg.bot)
    await ListenerLoader.load(bot)
    if (cfg.bot.skip_login) {
      return await this.skip_login(bot)
    }
    await bot.login(cfg.qq, cfg.pwd)
    bot[bot.uin] = bot
    global.Bot = bot
    return bot
  }
  /**
   * 跳过登录ICQQ
   * @param bot
   * @returns
   */
  static async skip_login(bot) {
    bot.uin = 88888
    bot[bot.uin] = bot
    global.Bot = bot
    return bot
  }
  /**
   * 加载插件
   * @param bot
   * @returns
   */
  static async PluginsLoader() {
    await PluginsLoader.load()
  }
}

/**
 * 机器人客户端
 */
export const Bot = global.Bot
