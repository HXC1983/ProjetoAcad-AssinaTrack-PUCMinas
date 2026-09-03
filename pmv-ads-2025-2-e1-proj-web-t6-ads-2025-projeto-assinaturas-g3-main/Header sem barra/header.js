document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header");
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));

  let avatarHTML = "";
  if (userLogado) {
    const fotoSalva = localStorage.getItem(
      `usuario_${userLogado.id}_fotoPerfil`
    );

    avatarHTML = `
      <img 
        id="miniAvatar"
        src="${fotoSalva || "/imagens/user-avatar.png"}"
        class="avatar"
        alt="Foto do usuário"
      >
    `;
  }

  const menu = `
    <li><a href="/codigo-fonte/Tela-SobreNos/SobreNos.html">Sobre nós</a></li>
    <li><a href="/codigo-fonte/Home-Gabriel/home.html#como-funciona">Como funciona</a></li>
    <li><a data-protegido="true" href="/codigo-fonte/MinhasAssinaturas/minhas-assinaturas.html">Minhas assinaturas</a></li>
    <li><a data-protegido="true" href="/codigo-fonte/Tela-Notificacoes/notificacoes.html">Minhas notificações</a></li>
    <li><a href="/codigo-fonte/Home-Gabriel/home.html#contato">Contato</a></li>
  `;

  const botoesDireita = userLogado
    ? `
      <a href="/codigo-fonte/Meu-perfil-Douglas/perfil.html" class="perfil-btn">Meu Perfil</a>
      ${avatarHTML}
    `
    : `<a href="/codigo-fonte/Login-Douglas/Login.html" class="perfil-btn">Entrar</a>`;

  headerContainer.innerHTML = `
    <header class="navbar">
      <div class="logo">
        <a href="/codigo-fonte/Home-Gabriel/home.html">
          <img src="/imagens/logoassinatrack.png" alt="Assinatrack Logo">
        </a>
      </div>

      <nav>
        <ul>${menu}</ul>
      </nav>

      <div class="profile-section">
        ${botoesDireita}
      </div>
    </header>

  

    <!-- MODAL LOGIN -->
    <div id="modalLogin" class="modal-overlay" style="display:none;">
      <div class="modal-box">
        <button id="closeModalX" class="modal-close-x">✖</button>

        <h2>Você não está logado</h2>
        <p>Para acessar esta área, faça login ou crie uma conta gratuita.</p>

        <div class="modal-buttons">
          <a href="/codigo-fonte/Login-Douglas/Login.html" class="modal-btn primary">Fazer Login</a>
          <a href="/codigo-fonte/CriarConta-Hugo/index.html" class="modal-btn primary">Criar Conta</a>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById("modalLogin");
  const modalBox = document.querySelector(".modal-box");
  const closeX = document.getElementById("closeModalX");

  function abrirModal() {
    modal.style.display = "flex";
  }

  closeX.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modalBox.addEventListener("click", (e) => e.stopPropagation());

  modal.addEventListener("click", (e) => {
    if (!modalBox.contains(e.target)) {
      modal.style.display = "none";
    }
  });

  document.querySelectorAll("a[data-protegido='true']").forEach((link) => {
    link.addEventListener("click", function (e) {
      if (!userLogado) {
        e.preventDefault();
        abrirModal();
      }
    });
  });

  document.querySelectorAll('a[href*="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const url = new URL(this.href);
      const hash = url.hash;

      if (hash && document.querySelector(hash)) {
        const destino = document.querySelector(hash);

        if (url.pathname === window.location.pathname) {
          e.preventDefault();
          destino.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    });
  });
});
