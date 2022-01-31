const conta = function (operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    console.log(numero);
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
};
conta("+", 0, 20, 30, 40, 50);
