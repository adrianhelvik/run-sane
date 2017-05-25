Why use run-sane?
=================

`run-sane` is a package for writing build-scripts, etc that require one or
more processes to be run with prefixes and terminal colors.

API
===

```
run({
  command: required Array<String>,
  cwd: required String,
  prefix: required String
})
```

Example usage
=============

```javascript
const run = require('run-sane')

run({
  command: ['yarn', 'start'],
  cwd: __dirname + '/backend',
  prefix: 'backend'
})

run({
  command: ['yarn', 'start'],
  cwd: __dirname + '/frontend',
  prefix: 'javascript bundle'
})

run({
  command: ['php', '-S', '127.0.0.1:8080'],
  cwd: __dirname + '/legacy',
  prefix: 'PHP server'
})
```

Example output
==============

```
yarn start v0.24.5
$ node run
[PHP server]:  [Thu May 25 08:05:43 2017] PHP Warning:  Module 'pdo_pgsql' already loaded in Unknown on line 0
[PHP server]:

yarn start v0.24.5]:
[javascript bundle]:

[backend]:
[backend]:  yarn start v0.24.5
[backend]:

$ webpack --watch ]:
[javascript bundle]:

$ node server.js
[backend]:
[backend]:  Listening on *:1234
[backend]:
[javascript bundle]:
[javascript bundle]:  Webpack is watching the files…
[javascript bundle]:
[javascript bundle]:
[javascript bundle]:  Live Reload listening on port 35729
[javascript bundle]:
[javascript bundle]:
[javascript bundle]:  Hash: 1d2622b8821f0561dd1b
[javascript bundle]:  Version: webpack 2.6.0
[javascript bundle]:  Time: 408ms
[javascript bundle]:      Asset     Size  Chunks             Chunk Names
[javascript bundle]:  bundle.js  3.23 kB       0  [emitted]  main
[javascript bundle]:     [0] ./src/index.js 80 bytes {0} [built]
[javascript bundle]:
```

Contrib
=======
Feel free to send me pull requests!
