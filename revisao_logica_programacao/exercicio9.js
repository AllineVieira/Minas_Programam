/* Imprima os números de 0 a 50 e imprima
se o número é par ou ímpar*/

let numero = 0;


while(numero <= 50) {
    console.log(numero);
    numero = numero + 1;
    if(numero % 2 == 0){
        console.log("O número é par")
    } else {
        console.log("O número é ímpar")
    }
}

