const shelljs = require('shelljs')

const srcFiles = [
    ['node_modules/snapsvg/dist/snap.svg.slim.js', 'index.js'],
]

srcFiles.forEach(([src, dst]) => shelljs.rm(dst))
srcFiles.forEach(([src, dst]) => shelljs.cp(src, dst))
