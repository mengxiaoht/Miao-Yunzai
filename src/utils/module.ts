import { createRequire as cRequire } from 'module'
import path from 'path'

const CustomExtensions = [
  //
  '.css',
  //
  '.apng',
  '.png',
  '.jpg',
  '.jpeg',
  '.jfif',
  '.pjpeg',
  '.pjp',
  '.gif',
  '.svg',
  '.ico',
  '.webp',
  '.avif',
  '.mp4',
  '.webm',
  '.ogg',
  '.mp3',
  '.wav',
  '.flac',
  '.aac',
  '.opus',
  '.mov',
  '.m4a',
  '.vtt',
  '.woff',
  '.woff2',
  '.eot',
  '.ttf',
  '.otf'
]

/**
 * 加载指定资源的本地路径
 * @param basePath 引入模块地址
 * @param customExtensions
 * @returns
 */
export function createRequire(
  basePath: string,
  customExtensions = CustomExtensions
) {
  const require = cRequire(basePath)
  for (const ext of customExtensions) {
    require.extensions[ext] = (module, filename) => {
      module.exports = path.resolve(filename)
    }
  }
  return require
}
