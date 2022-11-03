/*Dado um array de objetos.
 */
// array dentro de objeto dentro de array
const tarefas = [{passear: false, afazeres: ["Trabalhar", "Estudar", "Fazer comida", "Mercado","Descansar"], reuniao: {faculdade:"Segunda-feira", amigos: "Sexta-feira"},},];

/* Acesse a propriedade do objeto do terceiro item*/

console.log(tarefas[0].reuniao.faculdade);