
/*
let numeros = 1;

while (numeros <= 100){
    if ( numeros % 2 === 0)
   console.log(numeros);
   numeros++;
}

*/

/*
let r = require('readline-sync');

let num = parseInt(r.question("Digite aqui um número: "))

let n1 = " "

for(let i = 0; i < num; i++){
    n1 += "*"
    console.log(n1)
}

*/

/*
let r = require('readline-sync');

let nome = (r.question("Digite aqui seu nome: "))

console.log("Ola "+ nome)

let digitar = (r.question("Digite qlq coisa: "))

while (digitar != "tchau") {
    console.log("Para sair do programa digite: tchau ")
    digitar = r.question('')
}

*/

let r = require('readline-sync');

let passos = 0
const meta = 500

while(passos < meta) {
    passos += parseInt(r.question("Informe qnt de passos vc deu até agora: "))
}

console.log ("Parabéns! Vc atingiu a meta: " + passos)

