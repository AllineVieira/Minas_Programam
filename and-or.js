const condicao1 = 5 > 7;
const condicao2 = 5 > 2;

if (condicao1 && condicao2) {
    console.log("Deu bom!")
} else {
    console.log("Deu ruim")
}

console.log(condicao1 && condicao2)
// tabela verdade
// && represents and "e"
// || represents or "ou"

const nome1 = "Alline"
const idade1 = 16
const entregouDocumentos1 =  true

console.log("Alline " + (idade1 > 18 && entregouDocumentos1));

console.log(nome1 + " " + (idade1 > 18 || entregouDocumentos1))