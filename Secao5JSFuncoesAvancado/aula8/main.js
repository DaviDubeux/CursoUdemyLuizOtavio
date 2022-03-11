/* 

arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
callback
    Função para executar em cada elemento, recebendo três argumentos:
    
    currentValue:
        O valor atual do elemento sendo processado no array.

    index (opcional):
        O índice do elemento atual sendo processado no array.

    array (opcional):
        O array que `forEach()` está sendo aplicado.

thisArg (opcional):
    Opcional. Valor a ser usado como this quando executar callback.

*/

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 23 },
  { nome: "Eduardo", idade: 55 },
  { nome: "Letícia", idade: 10 },
  { nome: "Rosana", idade: 64 },
  { nome: "Wallace", idade: 63 },
];

tamanhoDoNome = (element, index, array) => {
  console.log(`o nome de pessoas[${index}] tem ${element.nome.length} letras`);
};

// pessoas.forEach(tamanhoDoNome);

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let total = 0;
a1.forEach((valor) => {
  total += valor;
});
console.log(total);
