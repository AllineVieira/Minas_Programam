const cardapio = [];

function adicionarPrato(nome, descricao, quantidade, notaDoChef) {
    const prato = {
        nome: nome,
        descricao: descricao,
        quantidade: quantidade,
        notaDoChef: notaDoChef,
    }
    cardapio.push(prato);
}

adicionarPrato("Macarrão",
"Macarrão tipo espaguete com molho bolonhesa", 
500, 
10);

adicionarPrato("Brigadeiro",
"Brigadeiros enroladinhos com granulado", 
100,
10);

adicionarPrato("Salada Ceaser",
"Salada com pequenos pedaços de pão e molho ceaser",
200,
10);

adicionarPrato("Bolo de Cenoura", 
"Delicioso bolo de cenoura com cobertura de chocolate",
200,
8);

console.log(cardapio)
console.log(cardapio[1].descricao)
