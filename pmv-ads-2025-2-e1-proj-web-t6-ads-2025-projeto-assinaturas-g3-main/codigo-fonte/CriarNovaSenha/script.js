// Validação senha
const senhaInput = document.getElementById('senha');
const mensagemSenha = document.getElementById('mensagem-senha');

const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

senhaInput.addEventListener('input', () => {
    const senha = senhaInput.value.trim();

    if (senha === "") {
        mensagemSenha.textContent = "Preencha sua senha";
        mensagemSenha.style.color = "red";
        senhaInput.style.borderColor = "";
    }
    else if (!regexSenha.test(senha)) {
        mensagemSenha.textContent = "A senha deve ter no mínimo 8 caracteres, incluindo maiúsculas, minúsculas, número e caractere especial";
        mensagemSenha.style.color = "red";
        senhaInput.style.borderColor = "red";
    }
    else {
        mensagemSenha.textContent = "Senha válida";
        mensagemSenha.style.color = "green";
        senhaInput.style.borderColor = "green";
    }
    validarConfirmacaoSenha();
    verificarBotao();

});

// Validação confirmar senha
const confirmarSenhaInput = document.getElementById('confirmar-senha');
const mensagemConfirmarSenha = document.getElementById('mensagem-confirmar-senha');

confirmarSenhaInput.addEventListener('input', () => {
    validarConfirmacaoSenha();
    verificarBotao();
});

function validarConfirmacaoSenha() {
    const senha = senhaInput.value.trim();
    const confirmarSenha = confirmarSenhaInput.value.trim();

    if (confirmarSenha === "") {
        mensagemConfirmarSenha.textContent = "Confirme sua senha";
        mensagemConfirmarSenha.style.color = "red";
        confirmarSenhaInput.style.borderColor = "";
    }
    else if (confirmarSenha !== senha) {
        mensagemConfirmarSenha.textContent = "As senhas não coincidem";
        mensagemConfirmarSenha.style.color = "red";
        confirmarSenhaInput.style.borderColor = "red";
    }
    else {
        mensagemConfirmarSenha.textContent = "Senhas coincidem";
        mensagemConfirmarSenha.style.color = "green";
        confirmarSenhaInput.style.borderColor = "green";
    }
}

// HABILITAR BOTÃO SOMENTE COM CHECKBOXES E CAMPOS
const termos = document.getElementById('termos');
const notificacao = document.getElementById('notificacao');
const botaoCriar = document.getElementById('btnCriarSenha');

botaoCriar.disabled = true;

termos.addEventListener('change', verificarBotao);
notificacao.addEventListener('change', verificarBotao);

function verificarBotao() {
    if (
        mensagemSenha.style.color === "green" &&
        mensagemConfirmarSenha.style.color === "green" &&
        termos.checked &&
        notificacao.checked
    ) {
        botaoCriar.disabled = false;
        botaoCriar.style.opacity = 1;
    } else {
        botaoCriar.disabled = true;
        botaoCriar.style.opacity = 0.5;
    }
}

//Cadastro - Salvar nova senha do usuário


// 1. Impedir o envio automático e salvar a nova senha
botaoCriar.addEventListener('click', function(event) {
    event.preventDefault(); // impede o formulário de recarregar a página

    salvarNovaSenha();   // chama a função de cadastro
});

// 2. Função que guarda nova senha no LocalStorage
function salvarNovaSenha() {
    const senha = senhaInput.value.trim();
    const confirmar = confirmarSenhaInput.value.trim();

    // Verificações básicas
    if (!senha || !confirmar) {
        alert("Preencha a senha e a confirmação.");
        return;
    }
    if (senha !== confirmar) {
        alert("As senhas não coincidem.");
        return;
    }

    // Salva apenas a senha
    localStorage.setItem("NovaSenha", senha);

    alert("Senha atualizada com sucesso!");

    // Impede novo clique, opcional
    botaoCriar.disabled = true;

    // Redirecionar para login (opcional)
    window.location.href = "http://127.0.0.1:5500/codigo-fonte/Login-Douglas/Login.html";
}

