import { createRequire } from 'module'

/**
 * @deprecated 已废弃
 * @returns
 */
export { createRequire }

/**
 * @deprecated 已废弃
 * @param path
 * @returns
 */
export function require(path: string) {
  return (url: string) => {
    return createRequire(url)(path)
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
  return <T = any>(path: string): Promise<T> =>
    import(
      new URL(
        `${path}${process.env.NODE_ENV == 'production' ? '' : now()}`,
        basePath
      ).href
    )
}

/**
 * 动态组件类型
 */
export type ModuleWithComponent<
  ComponentName extends string,
  PropsType = any
> = Promise<{ [K in ComponentName]: React.ComponentType<PropsType> }>

/**
 * @param basePath import.meta.url
 * @returns
 * ***********
 * 创建动态组件
 * ***********
 * 在env.NODE_ENV=='production'下禁用
 */
export const createDynamicComponent = (basePath: string) => {
  /**
   * 与import作用相同
   * @param path 相对路径
   * @returns
   */
  return <D extends string, T = any>(path: string): ModuleWithComponent<D, T> =>
    import(
      new URL(
        `${path}${process.env.NODE_ENV == 'production' ? '' : now()}`,
        basePath
      ).href
    )
}
