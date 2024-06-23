/**
 * 置换html内的路径符
 * @param htmlContent 字符串
 * @returns
 */
export function replacePaths(htmlContent: string) {
  // 正则表达式匹配 src、href 和 url 中的路径
  const regex = /(src|href|url)\s*=\s*["']([^"']*\\[^"']*)["']/g
  htmlContent = htmlContent.replace(regex, (_, p1, p2) => {
    const correctedPath = p2.replace(/\\/g, '/')
    return `${p1}="${correctedPath}"`
  })
  const cssUrlRegex = /url\(["']?([^"'\)\\]*\\[^"'\)]*)["']?\)/g
  return htmlContent.replace(cssUrlRegex, (_, p1) => {
    const correctedPath = p1.replace(/\\/g, '/')
    return `url(${correctedPath})`
  })
}
