import EventListener from '../listener.js'
import cfg from '../../config/config.js'
import { relpyPrivate } from '../plugins/common.js'
import { BOT_NAME } from '../../config/system.js'

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
    logger.mark('----^_^----')
    logger.mark(
      logger.green(`${BOT_NAME} 上线成功 版本v${cfg.package.version}`)
    )
    logger.mark(logger.green('https://github.com/yoimiya-kokomi/Miao-Yunzai'))

    /** 上线通知 */
    this.loginMsg()
  }

  /**
   *
   * @returns
   */
  async loginMsg() {
    if (!cfg.bot.online_msg) return
    if (!cfg.masterQQ || !cfg.masterQQ[0]) return
    let key = `Yz:loginMsg:${Bot.uin}`

    if (await redis.get(key)) return

    let msg = `欢迎使用【${BOT_NAME} v${cfg.package.version}`

    redis.set(key, '1', { EX: cfg.bot.online_msg_exp })

    setTimeout(() => relpyPrivate(cfg.masterQQ[0], msg), 1000)
  }
}
