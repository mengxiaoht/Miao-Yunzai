import { ConfigController as cfg } from 'yunzai/config'
import { Plugin } from 'yunzai/core'
/**
 *
 */
export class invite extends Plugin {
  /**
   *
   */
  constructor() {
    /**
     * 
      name: 'invite',
      dsc: '主人邀请自动进群',
     */
    super()
    this.event = 'request.group.invite'
  }
  /**
   *
   * @returns
   */
  async accept() {
    if (/group/.test(this.event)) {
      this.e.isGroup = true
    }
    if (!this.e.isGroup) return
    //
    if (!cfg.masterQQ || !cfg.masterQQ.includes(String(this.e.user_id))) {
      logger.mark(`[邀请加群]：${this.e.group_name}：${this.e.group_id}`)
      return
    }
    logger.mark(`[主人邀请加群]：${this.e.group_name}：${this.e.group_id}`)
    this.e.approve(true)
    this.e.bot
      .sendPrivateMsg(this.e.user_id, `已同意加群：${this.e.group_name}`)
      .catch(err => {
        logger.error(err)
      })
  }
}
