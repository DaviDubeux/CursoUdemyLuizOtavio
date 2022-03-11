let data = new Date();

diaSemanaTexto = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

mesTexto = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

function zeroAEsquerda(num) {
  return num > 10 ? num : `0${num}`;
}

const diaSemana = data.getDay();
const dia = data.getDate();
const mes = data.getMonth();
const ano = data.getFullYear();
const hora = data.getHours();
const min = data.getMinutes();

const dataTexto = `${diaSemanaTexto[diaSemana]}, ${dia} de ${
  mesTexto[mes]
} de ${ano}
${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}`;

console.log(dataTexto);

const h1 = document.querySelector(".container h1");

h1.innerHTML = dataTexto;

/*
const h1 = document.querySelector(".container h1");
const data = new Date();
h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  //   timeStyle: "short",
});
*/
