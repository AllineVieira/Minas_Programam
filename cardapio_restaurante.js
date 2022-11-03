const cardapio = [];
const prato1 = {
    nome: "Salada Ceaser",
    descricao: "Salada com molho Ceaser e pedações de frango e pão",
    quantidade: 150,
    nota_do_chef: 10,
};
const prato2 = {
    nome: "Bolo de Cenoura",
    descricao: "Delicioso bolo sabor cenoura com cobertura de chocolate",
    quantidade: 100,
    nota_do_chef: 8
};
const prato3 = {
    nome: "Macarrão",
    descricao: "Macarrão espaguete com molho bolonhesa (carne com molho de tomate",
    quantidade: 300,
    nota_do_chef: 8
}
const prato4 = {
    nome: "Brigadeiro",
    descricao: "Brigadeiros com granulado",
    quantidade: 100,
    nota_do_chef: 10
}

cardapio.push(prato1, prato2, prato3, prato4)

//console.log(cardapio)

for(i = 0; i < cardapio.length; i++){
    console.log(`*Cardápio*
    Prato: ${cardapio[i].nome}
    Descrição: ${cardapio[i].descricao}
    Peso em gramas: ${cardapio[i].quantidade}
    Nota do chef: ${cardapio[i].nota_do_chef} estrelas`)
}

