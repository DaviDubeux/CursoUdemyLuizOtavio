// Fazer um timer
// Atribuir o valor do timer pro relogio
// Definir pra quando o relogio estiver pausado, ficar vermelho

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

zerar.addEventListener("click", function (event) {
  alert("Cliquei no zerar");
});

function timer() {
  let inicio = Date.now();
  function contando() {
    setInterval(() => {
      let fim = Date.now();
      let decorrido = fim - inicio;
      console.log(Math.floor(decorrido / 1000));
    }, 1000);
  }
  contando();
}

iniciar.addEventListener("click", function (event) {
  timer();
});

pausar.addEventListener("click", function (event) {});

// timer();
