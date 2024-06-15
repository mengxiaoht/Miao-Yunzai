import { type GroupMessage } from 'icqq'
// import { Client } from 'icqq'
// import { PrivateMessage } from 'oicq'

export interface EventType extends GroupMessage {
  /**
   * 是否是主人
   */
  isMaster: boolean
  /**
   * 是否是管理员
   */
  // isAdmin: boolean;
  /**
   * 是否是群里
   */
  isGroup: boolean
  /**
   * 是私聊
   */
  isPrivate?: any
  /**
   * 是频道
   */
  isGuild?: any
  /**
   * 用户名
   */
  user_name: string
  /**
   * 用户头像
   */
  user_avatar: string | null
  /**
   * 用户消息
   */
  msg: string
  /**
   * 消息发送
   * @param arg
   * @returns
   */
  reply: (...arg: any[]) => Promise<any>
  /**
   * 群号
   */
  group_id: number;
  /**
   * 群名
   */
  group_name: string;
  /**
   *  群头像
   */
  group_avatar: string | null
  /**
   * 
   */
  group: {
    is_owner: any;
    recallMsg: (...arg: any[]) => any;
    getMemberMap: any;
    quit: any;
    mute_left: any

    pickMember: any


    sendMsg: any
  };
  /**
 */
  file: any;
  /**
   */
  bot: any;
  /** 
   * 
   */
  approve: any;
  /**
   * 
   */
  member: any;
  /**
   * 
   */
  logText: any;
  /**
   * 
   */
  isSr?: boolean
  /**
   * 
   */
  isGs?: boolean
  /**
   * 
   */
  self_id?: any
  /**
   * 
   */
  game?: any
  /**
   * 
   */
  detail_type?: any
  /**
   * 
   */
  at?: any
  /**
   * 
   */
  atBot: any;
  /**
   * 
   */
  hasAlias?: any
  /**
   * 
   */
  replyNew?: any
  /**
   * 
   */
  friend?: any
}

/**
 * 函数式回调类型
 */
export type MessageCallBackType = (
  e: EventType
) => Promise<boolean | undefined | void>
