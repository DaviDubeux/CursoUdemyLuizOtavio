const number = Number(window.prompt('Digite um número: '));

document.body.innerHTML += `<h1>Seu número é ${number}<h1 />`;
document.body.innerHTML += `<p>Raiz quadrada: ${number ** 0.5}<p/>`;
document.body.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`;
document.body.innerHTML += `<p>É NaN: ${Number.isNaN(number)}</p>`;
document.body.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(number)}</p>`;
document.body.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(number)}</p>`;
document.body.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;