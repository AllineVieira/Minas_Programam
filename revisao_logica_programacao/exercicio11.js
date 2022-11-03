/*Dado uma pontuação retornar com as seguintes notas:
Se a pontuação for maior que 90, retornar: "A"
Se a pontuação for maior que 80, retornar: "B"
Se a pontuação for maior que 70, retornar: "C"
Se a pontuação for maior que 65, retornar: "D"
ou "F" */

let n = 40;

if(n > 90) {
    console.log("A")
} else if ((n > 80) && (n < 90)){
    console.log("B")
} else if ((n > 70) && (n < 80)){
    console.log("C")
} else if ((n > 65) && (n < 70)){
    console.log("D")
} else {
    console.log("F")
}