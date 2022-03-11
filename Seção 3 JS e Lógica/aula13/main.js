const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

// Atribuição via desestruturação
const { nome, ...resto } = pessoa;
console.log(nome, resto);
