document.getElementById("botaoEnviar").addEventListener("click", verificaFormulario);

function verificaFormulario() {
    if (document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != "") {
        alert("Dados enviados!");
    } else {
        alert("Preencha todos os campos antes de enviar!");
    }
}