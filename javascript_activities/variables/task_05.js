//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

let variavel = 5;

if(variavel === 5) {
variavel = 6;
console.log(variavel);
}