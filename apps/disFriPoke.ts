
import { ConfigController as cfg } from '#miao/config'
import { plugin } from '#miao/core'
/**
 * 
 */
export class disFriPoke extends plugin {
    constructor() {
        super({
            name: '禁止私聊',
            dsc: '对私聊禁用做处理当开启私聊禁用时只接收cookie以及抽卡链接',
            event: 'notice.friend.poke'
        })
        this.priority = 0
    }

    async accept() {
        if (!cfg.other?.disablePrivate) return

        if (this.e.isMaster) return

        this.e.reply(cfg.other.disableMsg)
        return 'return'
    }
}
