import { Plugin, segment } from 'yunzai/core'
/**
 *
 */
export class newcomer extends Plugin {
  /**
   *
   */
  constructor() {
    /**
      name: '欢迎新人',
      dsc: '新人入群欢迎',
     */
    super()
    this.event = 'notice.group.increase'
    this.priority = 5000
  }

  /**
   * 接受到消息都会执行一次
   * @returns
   */
  async accept() {
    /** 定义入群欢迎内容 */
    let msg = '欢迎新人！'
    /** 冷却cd 30s */
    let cd = 30
    if (this.e.user_id == this.e.bot.uin) return
    /** cd */
    let key = `Yz:newcomers:${this.e.group_id}`
    if (await redis.get(key)) return
    redis.set(key, '1', { EX: cd })
    /** 回复 */
    await this.reply([
      segment.at(this.e.user_id),
      // segment.image(),
      msg
    ])
  }
}
