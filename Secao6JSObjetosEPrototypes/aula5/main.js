function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => this.nome + " " + this.sobrenome;

const pessoa1 = new Pessoa("Luiz", "O."); // <- Pessoa = Função construt.
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data.toLocaleDateString());

console.log(pessoa1.nomeCompleto());
