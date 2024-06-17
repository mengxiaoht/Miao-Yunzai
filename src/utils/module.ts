import { createRequire as cRequire } from 'module'

/**
 * @deprecated 已废弃
 * @param basePath
 */
export function createRequire(basePath: string) {
  return cRequire(basePath)
}

/**
 * @deprecated 已废弃
 * @param path
 * @returns
 */
export function require(path: string) {
  return (url: string) => {
    return cRequire(url)(path)
  }
}

/**
 * 获取时间请求
 * @returns
 */
const now = () => `?t=${Date.now()}`

/**
 * @param basePath import.meta.url
 * @param T 默认开启动态，可自定设置系统量关闭
 * @returns
 * ***********
 * 创建动态模块
 * ***********
 * 动态模块每次访问都将重新加载,
 * 如果动态模块内包含动态模块,
 * 内部模块也会跟着重新加载,
 * ***********
 * 请确保你的模块是可预测
 * ***********
 * 请确保当前模块是可被执行的
 */
export const createDynamic = (basePath: string, T = true) => {
  /**
   * 与import作用相同
   * @param path 相对路径
   * @param TT 默认开启动态，可自定设置系统量关闭
   * @returns
   */
  return (path: string, TT = true) =>
    import(new URL(`${path}${TT && T ? now() : ''}`, basePath).href)
}
