/*
Luiz Otávio Mirando tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/

const nome = 'Davi';
const sobrenome = 'Dubeux';
const idade = 16;
const peso = 73;
const altura = 1.80;
let imc; // peso / altura^2
let anoNascimento;

imc = peso / (altura**2)
anoNascimento = 2021 - idade

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(nome, 'nasceu em', anoNascimento + '.');