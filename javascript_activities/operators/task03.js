//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const logado = true;
const adm = false;

if(logado === true && adm === true) {
    console.log('Bem-vindo ao sistema.');
} else {
    console.log('Você não pode entrar no sistema.');
}

// pode ser assim tambem -> const resultado = logado && admin;
