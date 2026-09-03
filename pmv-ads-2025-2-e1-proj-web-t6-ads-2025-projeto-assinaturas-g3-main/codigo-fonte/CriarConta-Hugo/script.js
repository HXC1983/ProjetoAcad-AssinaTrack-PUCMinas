// Validação E-mail
const emailInput = document.getElementById('email');
const mensagemEmail = document.getElementById('mensagem-email');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        mensagemEmail.textContent = "";
        emailInput.style.borderColor = "";
    } else if (!regex.test(email)) {
        mensagemEmail.textContent = "E-mail inválido";
        mensagemEmail.style.color = "red";
        emailInput.style.borderColor = "red";
    } else {
        mensagemEmail.textContent = "E-mail válido";
        mensagemEmail.style.color = "green";
        emailInput.style.borderColor = "green";
    }
    verificarBotao();
});

// Validação nome
const nomeInput = document.getElementById('nome');
const mensagemNome = document.getElementById('mensagem-nome');

nomeInput.addEventListener('input', () => {
    const nome = nomeInput.value.trim();

    if (nome === "") {
        mensagemNome.textContent = "Preencha seu nome completo";
        mensagemNome.style.color = "red";
    } else {
        mensagemNome.textContent = "Nome preenchido";
        mensagemNome.style.color = "green";
    }
    verificarBotao();
});

// Validação telefone
const telefoneInput = document.getElementById('telefone');
const mensagemTelefone = document.getElementById('mensagem-telefone');

telefoneInput.addEventListener('input', () => {
    const telefone = telefoneInput.value.trim();
    const regex = /^[0-9]+$/;

    if (telefone === "") {
        mensagemTelefone.textContent = "Preencha seu telefone";
        mensagemTelefone.style.color = "red";
        telefoneInput.style.borderColor = "";
    } 
    else if (!regex.test(telefone)) {
        mensagemTelefone.textContent = "Digite apenas números";
        mensagemTelefone.style.color = "red";
        telefoneInput.style.borderColor = "red";
    } 
    else if (telefone.length < 10) {
        mensagemTelefone.textContent = "Telefone incompleto";
        mensagemTelefone.style.color = "red";
        telefoneInput.style.borderColor = "red";
    }
    else {
        mensagemTelefone.textContent = "Telefone válido";
        mensagemTelefone.style.color = "green";
        telefoneInput.style.borderColor = "green";
    }
    verificarBotao();
});

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
const botaoCriar = document.getElementById('btnCriarConta');

botaoCriar.disabled = true;

termos.addEventListener('change', verificarBotao);
notificacao.addEventListener('change', verificarBotao);

function verificarBotao() {
    if (
        mensagemNome.style.color === "green" &&
        mensagemTelefone.style.color === "green" &&
        mensagemEmail.style.color === "green" &&
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



const botaoCadastrar = document.getElementById('btnCriarConta');


async function gerarHash(texto) {
    const encoder = new TextEncoder();
    const data = encoder.encode(texto);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, "0"))
        .join("");
}

botaoCadastrar.addEventListener('click', async function(event) {
    event.preventDefault();
    await salvarDadosUsuario();
});


async function salvarDadosUsuario() {
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];

    const senhaHash = await gerarHash(senhaInput.value.trim());

    const usuario = {
        id: Date.now(),
        nome: nomeInput.value.trim(),
        telefone: telefoneInput.value.trim(),
        email: emailInput.value.trim(),
        senha: senhaHash   
    };

    const jaExiste = listaUsuarios.some(u => u.email === usuario.email);
    if (jaExiste) {
        alert("Esse e-mail já está cadastrado.");
        return;
    }

    listaUsuarios.push(usuario);

    localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));

    console.log("Usuário salvo com sucesso:", usuario);

    window.location.href = "http://127.0.0.1:5500/codigo-fonte/Login-Douglas/Login.html";
}
