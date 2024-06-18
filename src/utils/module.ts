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
 * @returns
 * ***********
 * 创建动态模块
 * ***********
 * 动态模块每次访问都将重新加载,
 * 如果动态模块内包含动态模块,
 * 内部模块也会跟着重新加载,
 * ***********
 * 在env.NODE_ENV=='production'下禁用
 * @deprecated 实验性的，请勿烂用
 */
export const createDynamic = (basePath: string) => {
  /**
   * 与import作用相同
   * @param path 相对路径
   * @returns
   */
  return (path: string) =>
    import(
      new URL(
        `${path}${process.env.NODE_ENV == 'NODE_ENV' ? '' : now()}`,
        basePath
      ).href
    )
}
