// elementos que eu preciso adicionar
const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

// declara a variavel container do elemento cotainer
const container = document.querySelector(".container");

// cria a div na <section>
const div = document.createElement("div");

/*-----------------------------------------------------
// declara as tags e os textos a partir da list elementos
const [
  { tag: eP, texto: tP },
  { tag: eDiv, texto: tDiv },
  { tag: eFooter, texto: tFooter },
  { tag: eSection, texto: tSection },
] = elementos;

// prepara as tags para a estrutura de repetição
const elementosTag = [eP, eDiv, eFooter, eSection];
let eTag;

//prepara os textos para a estrutura de repetição
const elementosText = [tP, tDiv, tFooter, tSection];
let eText;

// cria as tags e insere nelas seus textos correspondentes
for (let i = 0; i < elementos.length; i++) {
  eTag = document.createElement(elementosTag[i]);
  div.appendChild(eTag);

  eText = elementosText[i];
  eTag.innerHTML = eText;
}
--------------------------------------------------------*/

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  // let textoCriado = document.createTextNode(texto)
  // tagCriada.appendChild(textoCriado)

  tagCriada.innerText = texto;
  div.appendChild(tagCriada);
}

container.appendChild(div);
