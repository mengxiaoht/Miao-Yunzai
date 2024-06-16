import { createRequire as cRequire } from 'module'
/**
 * @deprecated 已废弃
 * @param basePath
 */
export function createRequire(basePath: string) {
  return cRequire(basePath)
}
/**
 * 引入资源并返回地址
 * @param path
 * @returns
 */
export function require(path: string) {
  return (url: string) => {
    return cRequire(url)(path)
  }
}
