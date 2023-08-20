function sum(a,b) {
    return a + b
}

/* Forma tradicional. No deprecada pero casi */
module.exports = sum

/* Podemos exportar también como objeto, así evitamos
que al importar se pueda usar la función con otro nombre distinto.
*/
module.exports = {
    sum
}