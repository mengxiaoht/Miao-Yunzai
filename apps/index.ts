/**
 * ***********
 * 不想开启的功能，自行注释
 * ***********
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

// import { Messages, Segment } from 'yunzai/core'
// import { imgae } from '../image.js'
// import { movies } from '../data.js'

// const message = new Messages()

// message.response(/^你好/, async e => {
//     const img = await imgae.createHello(e.user_id, {
//         data: {
//             'name': '测试'
//         },
//         'movies': movies
//     })
//     if (img) e.reply(Segment.image(img))
// })


// const Test = message.ok

// export { Test }