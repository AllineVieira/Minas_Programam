// 2) Retornar frutas tratadas com somente a primeira letra maiúscula e as demais minúscula
const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];
const novasFrutas = []
for(i = 0; i < frutas.length; i++){
    const primeiraLetra = frutas[i].charAt(0).toUpperCase();
    const ultimasLetras = frutas[i].substring(1).toLowerCase();
    const nomeCompleto = primeiraLetra + ultimasLetras;
    console.log(nomeCompleto);
    novasFrutas.push(nomeCompleto)
}

console.log(frutas)
console.log(novasFrutas)
