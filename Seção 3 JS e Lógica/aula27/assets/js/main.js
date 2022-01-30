// Fazer um timer
// Atribuir o valor do timer pro relogio
// Definir pra quando o relogio estiver pausado, ficar vermelho

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

const treshoras = 3 * 60 * 60 * 1000;

var timer;
var pausouEm = 0;
var decorrido;
var inicio;
var fim;

iniciar.addEventListener("click", () => {
  inicio = Date.now();
  relogio.style.color = "black";
  timer = setInterval(() => {
    fim = Date.now();
    decorrido = new Date(fim - inicio + treshoras + pausouEm);
    relogio.innerHTML = decorrido.toLocaleTimeString();
  }, 1000);
});

pausar.addEventListener("click", () => {
  pausouEm = decorrido.getTime() - treshoras;
  clearInterval(timer);
  relogio.style.color = "red";
});
zerar.addEventListener("click", () => {
  pausouEm = 0;
  clearInterval(timer);
  relogio.style.color = "black";
  relogio.innerHTML = "00:00:00";
});
