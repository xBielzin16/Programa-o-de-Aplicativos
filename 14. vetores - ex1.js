// Exercício

// Crie um vetor com nome de seus familiares.
// Com seis nomes.

// Use todos os comandos vistos em vetores após criar a lista.

const listaFamiliares = ["Andréa", "Aline", "Marcelo", "Dirlene", "Breno", "Bianca"]

console.log("Exibindo todos os nome")
console.log(listaFamiliares)

console.log("\nExibindo apenas o primeiro nome: ")
console.log(listaFamiliares [0])

console.log("\nAdicionando um nome: ")
listaFamiliares.push("Beatriz")
console.log(listaFamiliares)

console.log("\nAdicionando mais um nome: ")
listaFamiliares.push("Heitor")
console.log(listaFamiliares)

console.log("\nRemovendo um nome: ")
listaFamiliares.splice(3, 1)
console.log(listaFamiliares)

console.log("\nRemovendo mais um nome: ")
listaFamiliares.splice(3, 1)
console.log(listaFamiliares)

console.log("\nRemovendo apenas o antepenúltimo nome: ")
listaFamiliares.splice(4, 1)
console.log(listaFamiliares)

console.log("\nRemovendo apenas o penúltimo nome: ")
listaFamiliares.splice(3, 1)
console.log(listaFamiliares)

console.log("\nAdicionando o último nome: ")
listaFamiliares.push("Theo")
console.log(listaFamiliares)