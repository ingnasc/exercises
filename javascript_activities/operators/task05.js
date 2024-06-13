//Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

const idadeMinima = 18;
const idadeUsuario = 18;

if(idadeUsuario >= idadeMinima) {
    console.log('Pode comprar o ingresso!');
} else {
    console.log('Você não tem idade para comprar o ingresso.');
}