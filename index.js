require('colors')
process.env.FORCE_COLOR = true
const { spawn } = require('child_process')

let children = []

function run({ command, cwd, prefix }) {

  if (typeof command === 'string')
    command = command.split(' ').map(item => item.trim())

  console.assert(Array.isArray(command), '[run-sane]: missing/invalid param "command"')
  console.assert(typeof cwd === 'string', '[run-sane]: missing/invalid param "cwd"')
  console.assert(typeof prefix === 'string', '[run-sane]: missing/invalid param "prefix"')

  const proc = spawn(command[0], command.slice(1, command.length), { cwd })
  children.push(proc)

  proc.stdout.on('data', data => {
    message(`[${prefix}]: `.gray, data.toString())
  })

  proc.stderr.on('data', data => {
    message(`[${prefix}]: `.gray, data.toString())
  })

  proc.on('error', error => {
    children.forEach(child => child.kill())
    console.log('An error occurred!'.red)
    throw error
  })

  proc.on('close', code => {
    if (code !== 0) {
      console.log('A command exited with a non-zero exit code'.red)
      console.log('------------------------------------------'.red)
      console.log('Command:   ' + command.join(' '))
      console.log('Directory: ' + cwd)
      console.log('Exit code: ' + code)
      children.forEach(child => child.kill())
      process.exit()
    } else {
      children = children.filter(p => p !== proc)
    }
  })

  function message(prefix, message) {
    const result = []
    for (let line of message.split('\n')) {
      result.push(prefix + ' ' + line)
    }
    console.log(result.join('\n'))
  }
}

module.exports = run
