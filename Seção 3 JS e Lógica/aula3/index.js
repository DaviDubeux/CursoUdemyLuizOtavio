/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar "o valor mesmo"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/

// function falaOi () {
//     return 'Oi';
// }

// const vaiExacutar = 'a';

// console.log(vaiExacutar && falaOi())

// console.log(0 || false || false || null || 'Davi' || true)

const corUsuario = 'vermelho';
const corPadrao = corUsuario || 'preto';

console.log(corPadrao)