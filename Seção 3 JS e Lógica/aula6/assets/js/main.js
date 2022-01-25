function meuEscopo() {
  const form = document.querySelector(".form");

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const imc = peso / altura ** 2;

    console.log(imc, peso, altura);

    alert(`Seu IMC é de ${imc}`);
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
