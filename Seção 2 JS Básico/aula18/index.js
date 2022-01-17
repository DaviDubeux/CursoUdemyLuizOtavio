/*
const pessoa1 = {
    nome: 'Davi',
    sobrenome: 'Dubeux',
    idade: 16
};

console.log(pessoa1.idade)
*/

/*
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}


const pessoa1 = criaPessoa('Davi', 'Dubeux', 16)

console.log(pessoa1.nome)
*/

/*
function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
};

const pessoa1 = criaPessoa('Davi', 'Dubeux', 16)

console.log(pessoa1.sobrenome)
*/

const pessoa1 = {
    nome: 'Davi',
    sobrenome: 'Dubeux',
    idade: 16,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos`)
    }
}
 pessoa1.fala()
