//Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

let fora = 5;

if(true) {
    let dentro = 6; //só funciona dentro do bloco
    console.log(fora);
    console.log(dentro);
}

console.log(fora);
console.log(dentro);