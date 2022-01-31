const nome = "Luiz";

function falaNome() {
  const nome = "Otávio";
  console.log(nome);
}
falaNome();

function usaFalaNome() {
  const nome = "Otávio";
  falaNome();
}

usaFalaNome();
