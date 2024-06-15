import { createRequire as cRequire } from 'module'
import path from 'path'
/**
 * 加载指定资源的本地路径
 * @param basePath 引入模块地址
 * @param customExtensions ['.css', '.png', '.jpg', '.less', '.scss']
 * @returns
 */
export function createRequire(
  basePath: string,
  customExtensions = ['.css', '.png', '.jpg', '.less', '.scss']
) {
  const require = cRequire(basePath)
  customExtensions.forEach(ext => {
    require.extensions[ext] = (module, filename) => {
      module.exports = path.resolve(filename)
    }
  })
  return require
}
