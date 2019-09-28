let r = require('readline-sync');

/* ==1==
for (let i = 1; i < 100; i++) {
    if (i % 2 === 0)
    console.log(i)
}
console.log("Acabaram os números")
*/



/* ==2==
let num = parseInt(r.question("Digite aqui um numero: "))

let n1 = " "

let cont = 0

while(cont < num) {
    n1 += "*"
    console.log(n1)
    cont++
}
console.log("A piramede acabou!")
*/

/* ==3==
let nome = (r.question("Digite aqui seu nome: "))

console.log("Ola "+ nome)

let digitar = (r.question("Digite qlq coisa: "))

for (;digitar != "tchau";){
    digitar = r.question(("Digite qlq coisa \n Para sair do programa digite: tchau  "))
    console.log("Você digitou: " + digitar)
}
console.log("Tchau! \n" + nome)
*/

/* ==4==
let passos = 0
const meta = 500

for(;passos < meta;) {
    passos += parseInt(r.question("Informe qnt de passos vc deu até agora: "))
}

console.log ("Parabéns! Vc atingiu a meta: " + passos)
*/


/* ==5==
for(let num = 10; num >=1; num--){
    console.log(num)
}
*/
