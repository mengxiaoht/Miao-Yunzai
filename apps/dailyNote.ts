import { plugin } from 'yunzai/core'
import Note from '../model/note.js'
import { gsCfg } from 'yunzai/mys'
gsCfg.cpCfg('mys', 'set')
export class dailyNote extends plugin {
  constructor() {
    /**
      name: '体力查询',
      dsc: '体力查询',
     */
    super({
      priority: 300,
      rule: [
        {
          reg: '^#*(原神|星铁)?(体力|树脂|查询体力)$',
          fnc: 'note'
        }
      ]
    })
    this.set = gsCfg.getConfig('mys', 'set')
  }

  /** #体力 */
  async note() {
    let data = await Note.get(this.e)
    if (!data) return

    /** 生成图片 */
    this.renderImg('genshin', `html/player/daily-note-${data.game}`, data)
  }
}