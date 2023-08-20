const fs = require('node:fs') // a partir de Node 16, se recomienda poner node: antes del nombre del módulo 

console.log('Leyendo el primer archivo...')
// Síncrono. Lee de arriba a abajo.
// const text = fs.readFileSync('./archivo.txt', 'utf8') 

// Asíncrono
const text = fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log('Primer texto: ',text) // El callback se ejecuta cuando termine de ejecutar todo lo que está fuera de ella
}) 

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
    console.log('Segundo texto: ', text)
})
