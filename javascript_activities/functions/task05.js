//Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calculaPotencia = (base, expoente) => {
    return base ** expoente; // poderia usar Math.pow(base, expoente)
}

const base = 5;
const expoente = 2;

const resultado = calculaPotencia(5, 2);

console.log(`O resultado de ${base} elevado a ${expoente} é ${resultado}!`);