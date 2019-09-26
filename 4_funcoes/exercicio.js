//resposta aqui

let r = require("readline-sync");

let operacao = (r.question("Digite aqui, qual operador voce quer utilizar no seu calculo: "))

let primeiroValor = parseInt(r.question("Digite aqui o primeiro valor: "))

let segundoValor = parseInt(r.question("Digite aqui o segundo valor: "))

switch (operacao) {
    case '+' :
      console.log( primeiroValor + segundoValor);
      break;
    case '-' :
        console.log( primeiroValor - segundoValor);
        break;
    case '*':
        console.log(primeiroValor * segundoValor)
        break;
    case '/':
        console.log(primeiroValor / segundoValor)
        break
    default:
      console.log("Operação inválida");
  }

