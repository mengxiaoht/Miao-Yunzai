import { createRequire } from 'module'
const require = createRequire(import.meta.url)
/**
 * @type {import('tailwindcss').Config}
 */
export default {
  /**
   * 仅对plugins目录下的jsx、tsx、html文件生效
   */
  content: ['./plugins/**/*.{jsx,tsx,html}'],
  /**
   * 并不加入preline的js逻辑
   * 需要开发并使用js交互效果
   * 请自行建立独立的web环境
   */
  plugins: [require('preline/plugin')]
}
