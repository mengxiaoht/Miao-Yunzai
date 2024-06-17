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

    let msg = `欢迎使用【${BOT_NAME} v${cfg.package.version}】\n【#帮助】查看指令说明\n【#状态】查看运行状态\n【#日志】查看运行日志\n【#更新】拉取 Github 更新\n【#全部更新】更新全部插件\n【#更新日志】查看更新日志\n【#重启】重新启动\n【#配置ck】配置公共查询 Cookie`

    redis.set(key, '1', { EX: cfg.bot.online_msg_exp })

    setTimeout(() => relpyPrivate(cfg.masterQQ[0], msg), 1000)
  }
}
