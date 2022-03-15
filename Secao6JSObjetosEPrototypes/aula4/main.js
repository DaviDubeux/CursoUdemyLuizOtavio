/*
Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

//Já vimos
Object.keys(retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedades)

*/

const produto = { nome: "Produto", preco: 1.8, material: "porcelana" };
// console.log(Object.entries(produto));

for (let valor of Object.entries(produto)) {
  console.log(valor[0], valor[1]);
}
