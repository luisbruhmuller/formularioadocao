window.onload = function () {
    let botao = document.getElementById("enviar");
    botao.onclick = function (evento) {
        evento.preventDefault();
        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let telefone = document.getElementById("telefone").value;
        let cpf = document.getElementById("CPF").value;
        let idade = document.getElementById("idade").value;
        let cidade = document.getElementById("cidade").value;
        let moradia = document.getElementById("moradia").value;
        let quintal = document.getElementById("quintal").value;
        let petantes = document.getElementById("petantes").value;
        let horasSozinho = document.getElementById("horas_sozinho").value;
        let motivo = document.getElementById("motivo").value;
        let termo = document.getElementById("termo").checked;
    }
}
