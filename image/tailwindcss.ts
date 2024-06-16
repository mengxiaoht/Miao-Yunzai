import { spawn } from 'child_process'
/**
 * **********
 * 生成css文件
 * **********
 */
// exec('')

const child = spawn(
  'tailwindcss -i ./src/input.css -o ./public/output.css --watch',
  [],
  {
    shell: true,
    stdio: 'inherit'
  }
)
/**
 * *************
 * exit
 * *************
 */
process.on('SIGINT', () => {
  if (child.pid) process.kill(child.pid)
  if (process.pid) process.exit()
})
