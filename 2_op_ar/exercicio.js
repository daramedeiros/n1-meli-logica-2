//resposta aqui
let r = require("readline-sync");

//let a = parseInt(r.question("Digite 1 ou 2:  "))

//console.log(a)

let produtos = [ 
    {nome: "açaí", valor: 10.90},
    {nome: "bolo de leite ninho", valor: 5.60},
    {nome: "coxinha", valor: 3.00},
    {nome: "suco", valor: 2.00}
]

let posicao = parseInt(r.question("Digite a posicao do entre 0 e 3: "))

let porcentagem = parseInt(r.question("Digite uma porcentagem: "))

let produtoSelecionado = produtos[posicao]

let desconto = produtoSelecionado.valor * (porcentagem/100)

console.log(`O produto ${produtoSelecionado.nome} com desconto é R$ ${desconto.toFixed(2)}.`)

