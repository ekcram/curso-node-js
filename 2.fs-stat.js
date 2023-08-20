const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes del nombre del módulo 

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.isDirectory(),
    stats.isSymbolicLink(),
    stats.size // tamaño en bytes
)