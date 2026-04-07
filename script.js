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
               if (nome.length < 3) {
            alert("Erro: O nome precisa ter pelo menos 3 letras.");
            return;
        }
        if (email.indexOf("@") == -1) {
            alert("Erro: O email precisa ter um arroba (@).");
            return;
        }
        if (telefone.length < 8) {
            alert("Erro: O telefone precisa ter pelo menos 8 números.");
            return;
        }
        if (cpf == "") {
            alert("Erro: Você precisa digitar o CPF.");
            return;
        }
        if (idade == "") {
            alert("Erro: Você precisa digitar sua idade.");
            return;
        }
                if (cidade == "") {
            alert("Erro: Você precisa digitar sua cidade.");
            return;
        }
        if (moradia == "") {
            alert("Erro: Você precisa escolher se mora em casa ou apartamento.");
            return;
        }
        if (quintal == "") {
            alert("Erro: Você precisa dizer se tem quintal ou não.");
            return;
        }
        if (petantes == "") {
            alert("Erro: Você precisa dizer se já teve pet antes.");
            return;
        }
        if (horasSozinho == "" || isNaN(horasSozinho)) {
            alert("Erro: O campo horas sozinho precisa ser um número.");
            return;
        }
        if (motivo.length < 10) {
            alert("Erro: O motivo precisa ter pelo menos 10 letras. Escreva melhor.");
            return;
        }
        if (termo == false) {
            alert("Erro: Você deve marcar que aceita os termos.");
            return;
        }
        if (idade < 18) {
            alert("Bloqueado: Você precisa ter 18 anos ou mais para adotar.");
            return;
        }
        if (moradia == "apt") {
            let permiteAnimais = prompt("O seu apartamento permite animais? (Responda sim ou não)");
            if (permiteAnimais != "sim") {
                alert("Bloqueado: O seu prédio precisa permitir animais!");
                return;
            }
        }

        if (moradia == "casa") {
            let quintalSeguro = prompt("O seu quintal é seguro e sem buracos? (Responda sim ou não)");
            if (quintalSeguro != "sim") {
                alert("Bloqueado: O quintal precisa ser seguro para o pet não fugir.");
                return;
            }
        }

    }
}
