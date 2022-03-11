//                0        1        2          3         4
const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(index, delete, el1, el2, el3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, "Luiz");

// unshift
nomes.splice(0, 0, "Davi");
console.log(nomes);
