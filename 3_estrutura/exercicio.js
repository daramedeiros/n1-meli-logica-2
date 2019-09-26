//resposta aqui
let r = require("readline-sync");

let produtos = [
    {nome: "bolacha", tempoDeValidade: 6, congelado: false}, 
    {nome: "hamburger", tempoDeValidade: 6, congelado: true},
    {nome: "vinho", tempoDeValidade: 36,  congelado: false}
]

let escolhaProduto = parseInt(r.question("Escolha um produto entre 0 e x: "))

let produtoEscolhido = produtos[escolhaProduto]

let diasVencimento = parseInt(r.question("Digite quantos dias faltam para vencer: "))

let porcentagem = (diasVencimento * 100) / produtoEscolhido.tempoDeValidade

if (porcentagem <= 2) {

        console.log("Descartar produto, muito proximo de vencer")

    } else if (produtoEscolhido.congelado == false && 10) {

        console.log("Desconto!  Produto não congelado e próximo da validade.")

    } else if (produtoEscolhido.congelado == true && 5) {

        console.log("Desconto! Produto congelado e próximo da validade.")
    } else {
    console.log("Produto longe do vencimento.")
    
}