import { type GroupMessage } from 'icqq'
import Runtime from './runtime'

/**
 * 消息事件体
 */
export interface EventType extends GroupMessage {
  /**
   * 是否是机器人主人
   */
  isMaster: boolean
  /**
   * 是否是机器人管理员
   */
  // isAdmin: boolean;
  /**
   * 是否是群里
   */
  isGroup: boolean
  /**
   * 是否是群管理
   */
  // isGroupAdmin:boolean
  /**
   * 是私聊
   */
  isPrivate: boolean
  /**
   * 是频道
   */
  isGuild: boolean
  /**
   * 用户名
   */
  user_id: number
  /**
   * 用户名
   */
  user_name: string
  /**
   * 用户头像
   */
  user_avatar: string
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
  group_avatar: string

  /**
   * @deprecated 已废弃
   */
  runtime: typeof Runtime.prototype

  /**
   * @deprecated 已废弃
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
   * @deprecated 已废弃
 */
  file: any;
  /**
   * @deprecated 已废弃
   */
  bot: any;
  /** 
   * 
   * @deprecated 已废弃
   */
  approve: any;
  /**
   * 
   * @deprecated 已废弃
   */
  member: any;
  /**
   * 
   * @deprecated 已废弃
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
   * @deprecated 已废弃
   */
  self_id?: any
  /**
   * 
   * @deprecated 已废弃
   */
  game?: any
  /**
   * 
   * @deprecated 已废弃
   */
  detail_type?: any
  /**
   * 
   * @deprecated 已废弃
   */
  at?: any
  /**
   * 
   * @deprecated 已废弃
   */
  atBot: any;
  /**
   * 
   * @deprecated 已废弃
   */
  hasAlias?: any
  /**
   * 
   * @deprecated 已废弃
   */
  replyNew?: any
  /**
   * @deprecated 已废弃
   */
  friend?: any
}

/**
 * 函数式回调类型
 */
export type MessageCallBackType = (
  e: EventType
) => Promise<boolean | undefined | void>
