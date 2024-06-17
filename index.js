import { execSync, spawn } from 'child_process'
const argv = [...process.argv].splice(2)
const argvs = argv.join(' ').replace(/(\S+\.js|\S+\.ts)/g, '')
execSync('tailwindcss -i ./src/input.css -o ./public/output.css')
const child = spawn(
  'node --no-warnings=ExperimentalWarning --loader ts-node/esm src/main.ts',
  argvs.split(' '),
  {
    shell: true,
    stdio: 'inherit'
  }
)
process.on('SIGINT', () => {
  if (child.pid) process.kill(child.pid)
  if (process.pid) process.exit()
})
