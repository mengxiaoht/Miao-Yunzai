import EventListener from '../listener.js'
import cfg from '../../config/config.js'
import { relpyPrivate } from '../plugins/common.js'
import { BOT_NAME, REDIS_BOT_LOGIN_KEY } from '../../config/system.js'
import pluginsLoader from '../plugins.loader'

/**
 * 监听上线事件
 */
export class EventOnline extends EventListener {
  /**
   *
   */
  constructor() {
    /**
     *
     */
    super({
      event: 'system.online',
      once: true
    })
  }

  /**
   * 默认方法
   * @param e
   */
  async execute(_) {
    /**
     * 解析插件
     */
    await pluginsLoader.load()
    /**
     *
     */
    logger.mark('----^_^----')
    logger.mark(logger.chalk.green(`${BOT_NAME} V${cfg.package.version} 上线~`))
    /**
     * 上线通知
     */
    await this.loginMsg()
  }

  /**
   *
   * @returns
   */
  async loginMsg() {
    if (!cfg.bot.online_msg) return
    if (!cfg.masterQQ || !cfg.masterQQ[0]) return
    const key = `${REDIS_BOT_LOGIN_KEY}:${Bot.uin}`
    if (await redis.get(key)) return
    const msg = `欢迎使用【${BOT_NAME} V${cfg.package.version} 】`
    redis.set(key, '1', { EX: cfg.bot.online_msg_exp })
    setTimeout(() => relpyPrivate(cfg.masterQQ[0], msg), 1000)
  }
}
