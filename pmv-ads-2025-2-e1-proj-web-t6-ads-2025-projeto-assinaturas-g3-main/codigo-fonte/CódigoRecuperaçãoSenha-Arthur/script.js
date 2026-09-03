const codigoRecInput = document.getElementById('codigo');
const botaoRecuperar = document.getElementById('botao');
const mensagemRec = document.getElementById('mensagemRec');

botaoRecuperar.disabled = true;

codigoRecInput.addEventListener('input', () => {
    const codigoDigitado = codigoRecInput.value.trim();
    const codigoEnviado = localStorage.getItem("codigoRecuperacao");

    const regex = /^\d{5}$/;

    if (!regex.test(codigoDigitado)) {
        mensagemRec.textContent = "Digite um código válido";
        mensagemRec.style.color = "red";
        codigoRecInput.style.borderColor = "red";
        botaoRecuperar.disabled = true;
        return;
    }

    // verifica se é o mesmo código enviado
    if (codigoDigitado === codigoEnviado) {
        mensagemRec.textContent = "Código correto!";
        mensagemRec.style.color = "green";
        codigoRecInput.style.borderColor = "green";
        botaoRecuperar.disabled = false;
    } else {
        mensagemRec.textContent = "Código incorreto";
        mensagemRec.style.color = "red";
        codigoRecInput.style.borderColor = "red";
        botaoRecuperar.disabled = true;
    }
});

botaoRecuperar.addEventListener('click', (event) => {
    event.preventDefault();

    alert("Código correto! Agora crie uma nova senha :)");

    // remove o código do localStorage
    localStorage.removeItem("codigoRecuperacao");

    window.location.href = "http://127.0.0.1:5500/codigo-fonte/CriarNovaSenha/index.html";
});
