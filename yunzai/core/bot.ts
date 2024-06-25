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
 * 扩展
 */
import { Client as IcqqClient, type Config } from 'icqq'

/**
 *
 */
export class Client extends IcqqClient {
  /**
   *
   * @param conf
   */
  constructor(conf: Config) {
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
      await this.skip_login(bot)
      return
    }
    await bot.login(cfg.qq, cfg.pwd)
    bot[bot.uin] = bot
    global.Bot = bot
    return
  }
  /**
   * 跳过登录ICQQ
   * @param bot
   * @returns
   */
  static async skip_login(bot: typeof Client.prototype) {
    bot.uin = 88888
    bot[bot.uin] = bot
    global.Bot = bot
    return
  }
}

export const Bot: typeof global.Bot = new Proxy({} as any, {
  get(_, property) {
    return global.Bot[property]
  }
})
