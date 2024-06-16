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
