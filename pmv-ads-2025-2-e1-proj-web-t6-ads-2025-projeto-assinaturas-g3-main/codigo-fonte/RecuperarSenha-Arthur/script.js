// Validar Campos
const emailRecInput = document.getElementById('email');
const botaoRecuperar = document.getElementById('botao');
const mensagemRec = document.getElementById('mensagemRec');

botaoRecuperar.disabled = true;

// valida enquanto o usuário digita
emailRecInput.addEventListener('input', () => {
    const emailDigitado = emailRecInput.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(emailDigitado)) {
        mensagemRec.textContent = "Digite um e-mail válido";
        mensagemRec.style.color = "red";
        emailRecInput.style.borderColor = "red";
        botaoRecuperar.disabled = true;
        return;
    }

    // verifica se existe no LocalStorage  
    const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios")) || [];
    const usuario = listaUsuarios.find(u => u.email === emailDigitado);

    if (!usuario) {
        mensagemRec.textContent = "Este e-mail não está cadastrado";
        mensagemRec.style.color = "red";
        botaoRecuperar.disabled = true;
    } else {
        mensagemRec.textContent = "E-mail encontrado";
        mensagemRec.style.color = "green";
        emailRecInput.style.borderColor = "green";
        botaoRecuperar.disabled = false;  

        localStorage.setItem("usuarioRecuperar", JSON.stringify(usuario));
    }
});

// ação do btoão
botaoRecuperar.addEventListener('click', async (event) => {
    event.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuarioRecuperar"));
    const email = usuario.email;
    const nome = usuario.nome;

    // codigo
    const codigo = String(Math.floor(10000 + Math.random() * 90000));

    // salvar o código
    localStorage.setItem("codigoRecuperacao", codigo);

    //  ENVIAR EMAIL via EmailJS 
    emailjs.init("csVHdD_nbQT8ggHD1");

    const parametros = {
        nome: nome,
        codigo: codigo,
        logo: "logoassinatrack.png",
        email: email
    };

    try {
        await emailjs.send("service_bivaw7a", "template_wbsks68", parametros);

        alert("Código de recuperação enviado para o e-mail!");

        window.location.href = "http://127.0.0.1:5500/codigo-fonte/CódigoRecuperaçãoSenha-Arthur/index.html";

    } catch (error) {
        alert("Erro ao enviar o e-mail. Tente novamente.");
        console.log(error);
    }
});