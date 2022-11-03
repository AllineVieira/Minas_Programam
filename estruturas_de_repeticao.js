const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/*for(let i = 0; i < num.length; i++) { /* o menor poderia ser um numero x, coloca o length pra facilitar a repetição
    console.log(`Valor do i: ${num[i]}`)
}*/

/*for(let inicializadora = 0; inicializadora < 10; inicializadora++){
    const tabuada = num[i] * 2;
    console.log(tabuada);
}*/

for(let i = 0; i < num.length; i++) {

    const tabuada = num[i] * 2;
    console.log(tabuada)
}

const alunas = ["jessica", "alline", "eduarda", "leide", "luiza"];

for(let i = 0; i < alunas.length; i++) {
    const primeiraLetraNome = alunas[i].charAt(0).toUpperCase()
    const asDemaisLetrasDoNome = alunas[i].substring(1)
    console.log(primeiraLetraNome)
    console.log(asDemaisLetrasDoNome)

    console.log(primeiraLetraNome + asDemaisLetrasDoNome)
    
    const tratarNome = alunas[i].charAt(0).toUpperCase() + alunas[i].substring(1)

    console.log(tratarNome)
}

//Mostrar todos os itens da lista de frutas com a estrutura de repetição(laço) FOR.

const listaFrutas = [
    "Banana",
    "Manga",
    "Maça",
    "Pera",
    "Abacaxi",
    "Banana",
    "Manga",
    "Maça",
    "Pera",
    "Abacaxi",
  ];

for(i=0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i])
}

