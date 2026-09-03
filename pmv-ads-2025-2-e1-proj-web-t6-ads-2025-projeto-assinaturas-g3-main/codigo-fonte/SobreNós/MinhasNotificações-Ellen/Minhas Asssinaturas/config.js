document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header");

  if (headerContainer) {
    const currentPage = window.location.pathname.split("/").pop();

    let activePage = "";
    switch (currentPage) {
      case "sobre-nos.html":
        activePage = "Sobre nós";
        break;
      case "como-funciona.html":
        activePage = "Homepage";
        break;
      case "minhas-assinaturas.html":
        activePage = "Minhas assinaturas";
        break;
      case "notificacoes.html":
        activePage = "Minhas notificações";
        break;
      case "contato.html":
        activePage = "Contato";
        break;
      default:
        activePage = "Homepage";
    }

    headerContainer.innerHTML = `
            <header class="navbar">
                <div class="logo">
                    <img src="logo.png" alt="Assinatrack Logo">
                </div>
                <nav>
                    <ul>
                        <li><a href="sobre.html">Sobre nós</a></li>
                        <li><a href="como-funciona.html">Como funciona</a></li>
                        <li><a href="minhas-assinaturas.html">Minhas assinaturas</a></li>
                        <li><a href="notificacoes.html">Minhas notificações</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </nav>
                <div class="profile-section">
                    <button class="perfil-btn">Meu Perfil</button>
                    <img src="user-avatar.png" alt="Avatar" class="avatar">
                </div>
            </header>
            <div class="gradient-bar"></div>
        `;

    const links = headerContainer.querySelectorAll("nav ul li a");
    links.forEach((link) => {
      if (link.textContent.trim() === activePage) {
        link.classList.add("active");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('configForm');
    const antecedenciaInput = document.getElementById('antecedencia');
    const statusMessage = document.getElementById('mensagemStatus');
    
    const configuracoesSalvas = localStorage.getItem('configuracoesLembrete');
    if (configuracoesSalvas) {
        const configs = JSON.parse(configuracoesSalvas);
        if (configs.antecedencia) antecedenciaInput.value = configs.antecedencia;
        if (configs.localLembrete) {
            const radio = document.querySelector(`input[name="localLembrete"][value="${configs.localLembrete}"]`);
            if (radio) radio.checked = true;
        }
    }
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        const radioSelecionado = document.querySelector('input[name="localLembrete"]:checked').value;
        
        const novasConfiguracoes = {
            antecedencia: parseInt(antecedenciaInput.value),
            localLembrete: radioSelecionado
        };
        
        localStorage.setItem('configuracoesLembrete', JSON.stringify(novasConfiguracoes));
        
        statusMessage.textContent = 'Configurações atualizadas com sucesso!';
        statusMessage.style.color = '#2ecc71';
        statusMessage.style.opacity = '1';

        setTimeout(() => {
            statusMessage.style.opacity = '0';
            statusMessage.textContent = '';
        }, 3000);
    });
});