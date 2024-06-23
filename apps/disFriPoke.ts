import { ConfigController as cfg } from 'yunzai/config'
import { Plugin } from 'yunzai/core'
export class disFriPoke extends Plugin {
  constructor() {
    /**
            name: '禁止私聊',
            dsc: '对私聊禁用做处理当开启私聊禁用时只接收cookie以及抽卡链接',
         */
    super()
    this.event = 'notice.friend.poke'
    this.priority = 0
  }
  /**
   * default
   * @returns
   */
  async accept() {
    if (!cfg.other?.disablePrivate) return
    if (this.e.isMaster) return
    this.e.reply(cfg.other.disableMsg)
    return 'return'
  }
}
