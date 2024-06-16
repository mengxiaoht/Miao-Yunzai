import { spawn } from 'child_process'
const argv = [...process.argv].splice(2)
const argvs = argv.join(' ').replace(/(\S+\.js|\S+\.ts)/g, '')
const child1 = spawn(
  'tailwindcss -i ./src/input.css -o ./public/output.css --watch',
  [],
  {
    shell: true,
    stdio: 'inherit'
  }
)
const child2 = spawn(
  'node --no-warnings=ExperimentalWarning --loader ts-node/esm image/main.ts',
  argvs.split(' '),
  {
    shell: true,
    stdio: 'inherit'
  }
)
process.on('SIGINT', () => {
  if (child1.pid) process.kill(child1.pid)
  if (child2.pid) process.kill(child2.pid)
  if (process.pid) process.exit()
})
