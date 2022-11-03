/* Dado um array de objetos: */

const usuarios = [
    { nome: "Jordana", idade: 18 },
    { nome: "Lilian", idade: 28 },
    { nome: "Janaina", idade: 19 }
];

/*Imprima todos nome e idade da variável usuários.
A saída deverá ser:
Jordana
18
Lilian
28
...*/

console.log(usuarios[0].nome + " " + usuarios[0].idade + " " + usuarios[1].nome + " " + usuarios[1].idade + " " + usuarios[2].nome + " " + usuarios[2].idade)

for (let indice = 0; indice < usuarios.length; indice++) {
    console.log(usuarios[indice].nome)
    console.log(usuarios[indice].idade)
}
