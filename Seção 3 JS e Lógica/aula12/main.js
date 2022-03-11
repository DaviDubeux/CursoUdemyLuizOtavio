/*
let a = "A"; // B
let b = "B"; // C
let c = "C"; // A

[a, b, c] = [b, c, a];

console.log(a, b, c);
*/

// ... rest, ... spread

/*
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, , tres, , cinco, , sete] = numeros;

console.log(um, tres, cinco);
*/

const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numeros[1][2]);

const [, [, , seis]] = numeros;
console.log(seis);

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
