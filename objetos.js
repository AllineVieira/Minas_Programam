const professora = {nome: "Lisandra Cruz", idade: 28, empresa: "Minas Programam", signo: "Leão"};

const aluna = {nome: "Alline Giovanna", idade: 22, cargo: "Fotógrafa", signo: "Capricórnio"};


console.log(`Me chamo ${aluna.nome}, tenho ${aluna.idade} anos, sou ${aluna.cargo} e meu signo é ${aluna.signo}. Estou tendo aulas com a professora ${professora.nome}, que tem ${professora.idade} anos, dá aulas no ${professora.empresa} e é de ${professora.signo}`);


const marcaCarros = ["Ford", "Hyundai", "Fiat", "BMW", "Etios"];

console.log(marcaCarros[2]);

marcaCarros.push("VW");

console.log(marcaCarros.length);
console.log(marcaCarros)

marcaCarros[2] = "Alline";
console.log(marcaCarros);

marcaCarros.splice(1, 0, "Carla"); /* o primeiro é onde ele vai substituir, segundo é quantos elementos quer remover, terceiro é o novo item a ser inserido*/
console.log(marcaCarros);

marcaCarros[marcaCarros.length] = "Ultimo elemento";
console.log(marcaCarros);

marcaCarros.pop();

console.log(marcaCarros);