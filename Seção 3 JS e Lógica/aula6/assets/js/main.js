// capturar o evento de submit do formulario
const form = document.querySelector("#formulario");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputPeso = e.target.querySelector("#peso");
  const inputAltura = e.target.querySelector("#altura");

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  // verificando se os valores são validos
  if (!peso) {
    setResultado("Peso inválido", false);
    return;
  }

  if (!altura) {
    setResultado("Altura inválida", false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc})`;

  setResultado(msg, true);
});

// compara o imc com a tabela para ver seu nível
function getNivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc > 40) return nivel[5];
  if (imc >= 35) return nivel[4];
  if (imc >= 30) return nivel[3];
  if (imc >= 25) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

// calcula o imc em até 2 casa decimais
function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// cria o texto embaixo que não existia anteriormente
function criaP(className) {
  const p = document.createElement("p");
  return p;
}

// insere o novo texto na página
function setResultado(msg, isValid) {
  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";

  const p = criaP();

  // muda a classe do p dependendo se os inputs forem válidos
  if (isValid) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
