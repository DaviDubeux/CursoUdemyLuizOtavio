// for in -> lê os índices do array ou chaves do objeto
//
//

/*
const frutas = ["Pera", "Maçã", "Uva"];

for (let indice in frutas) {
  console.log(frutas[indice]);
}

// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
*/

//
//

const pessoa = {
  nome: "Luiz",
  sobrenome: "Otávio",
  idade: 30,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
