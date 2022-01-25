const verdadeira = true;

// let tem escopo de bloco { ... bloco }
// var só tem escopo de função

let nome = "Luiz"; // criando
var nome2 = "Luiz";

if (verdadeira) {
  let nome = "Otávio"; //criando
  var nome2 = "Rogério"; //redeclarando

  if (verdadeira) {
    let nome = "Otávio"; // criando
    var nome2 = "Ronaldo";
    redeclarando;
  }
}

console.log(nome, nome2);
