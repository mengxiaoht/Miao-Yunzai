/**
 * ***********
 * 不想开启的功能，自行注释
 * *****
 */
export * from './add.js'
export * from './event/disFriPoke.js'
export * from './event/disPri.js'
export * from './event/friend.js'
export * from './event/invite.js'
export * from './event/quit.js'
export * from './restart.js'
export * from './sendLog.js'
export * from './status.js'
export * from './update.js'
export * from './example2.js'
export * from './event/newcomer.js'
export * from './event/outNotice.js'

import { Messages, Segment } from 'yunzai/core'
import { imgae } from '../image.tsx'
import { movies } from '../data.ts'
const message = new Messages()
message.response(/^你好/, async e => {
  const UID = e.user_id
  // render 是异步的，因此此处也是异步的
  const img = await imgae.createHello(UID, {
    data: { name: 'word' },
    movies
  })
  // 判断是否成功
  if (typeof img !== 'boolean') {
    // 图片
    e.reply(Segment.image(img))
  } else {
    e.reply('你好')
  }
})

const word = message.ok

export { word }
