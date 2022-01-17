/*
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa tarde
Entre 18 - 23 - Boa noite
*/

// If pode ser usado sozinho
// Sempre que utlizo a palavra else, preciso de um if antes
// Eu posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 100;

if (0 <= hora && hora < 12) { 
    console.log('Bom dia');
} else if (12 <= hora && hora < 18) { 
    console.log('Boa tarde');
} else if (18 <= hora && hora < 24) {
    console.log('Boa noite')
} else {
    console.log('Olá');
}
