import { Plugin } from 'yunzai/core'
export class outNotice extends Plugin {
  tips = '退群了'
  constructor() {
    /**
            name: '退群通知',
            dsc: 'xx退群了',
         */
    super()
    this.event = 'notice.group.decrease'
  }
  /**
   *
   * @returns
   */
  async accept() {
    if (this.e.user_id == this.e.bot.uin) return
    let name = null,
      msg = null
    if (this.e.member) {
      name = this.e.member.card || this.e.member.nickname
    }
    if (name) {
      msg = `${name}(${this.e.user_id}) ${this.tips}`
    } else {
      msg = `${this.e.user_id} ${this.tips}`
    }
    logger.mark(`[退出通知]${this.e.logText} ${msg}`)
    await this.reply(msg)
  }
}
