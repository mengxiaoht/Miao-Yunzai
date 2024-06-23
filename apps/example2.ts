import { Plugin } from 'yunzai/core'
/**
 *
 */
export class example2 extends Plugin {
  constructor() {
    /**
      name: '复读',
      dsc: '复读用户发送的内容，然后撤回',
     */
    super()
    this.priority = 5000
    this.rule = [
      {
        reg: /^#复读$/,
        fnc: this.repeat.name
      }
    ]
  }
  /**
   *
   */
  async repeat() {
    /** 设置上下文，后续接收到内容会执行doRep方法 */
    this.setContext('doRep')
    /** 回复 */
    await this.reply('请发送要复读的内容', false, { at: true })
  }
  /**
   * 接受内容
   */
  doRep() {
    /** 复读内容 */
    this.reply(this.e.message, false, { recallMsg: 5 })
    /** 结束上下文 */
    this.finish('doRep')
  }
}
