import { execSync } from 'child_process'
/**
 * **********
 * 生成css文件
 * **********
 */
execSync('tailwindcss -i ./src/input.css -o ./public/output.css --watch')
