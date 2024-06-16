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

const now = () => `?update=${Date.now()}`

/**
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
 * @param basePath
 * @returns
 */
export const createDynamic = (basePath: string) => {
  return (path: string) => import(new URL(`${path}${now()}`, basePath).href)
}
