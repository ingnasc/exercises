//Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

const saldo = 2000;
const deposito = 500;
const saque = 200;

const operacao = (saldo + deposito) - saque;

console.log(`Seu saldo após o saque ficou de R$${operacao}.`);