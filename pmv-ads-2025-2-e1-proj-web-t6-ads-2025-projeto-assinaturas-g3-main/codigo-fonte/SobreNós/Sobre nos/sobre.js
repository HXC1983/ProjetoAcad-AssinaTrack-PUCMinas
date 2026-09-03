document.addEventListener("DOMContentLoaded", function () {
  const headerContainer = document.getElementById("header");
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));

  let avatarHTML = "";
  if (userLogado) {
    const fotoSalva = localStorage.getItem(
      `usuario_${userLogado.id}_fotoPerfil`
    );
    avatarHTML = `
      <img src="${fotoSalva || "/imagens/user-avatar.png"}" class="avatar">
    `;
  }

  const botoesDireita = userLogado
    ? `<a href="/codigo-fonte/Meu-perfil-Douglas/perfil.html" class="perfil-btn">Meu Perfil</a>${avatarHTML}`
    : `<a href="/codigo-fonte/Login-Douglas/Login.html" class="perfil-btn">Entrar</a>`;

  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="navbar">
        <div class="logo">
          <a href="/codigo-fonte/Home-Gabriel/home.html">
            <img src="/imagens/logoassinatrack.png" alt="Assinatrack Logo">
          </a>
        </div>

        <div class="menu-toggle">&#9776;</div>

        <nav class="main-nav">
          <ul>
            <li><a href="/codigo-fonte/SobreNós/Sobre nos/sobre.html">Sobre nós</a></li>
            <li><a href="/codigo-fonte/Home-Gabriel/home.html#como-funciona">Como funciona</a></li>
            <li><a data-protegido="true" href="/codigo-fonte/MinhasAssinaturas/minhas-assinaturas.html">Minhas assinaturas</a></li>
            <li><a data-protegido="true" href="/codigo-fonte/SobreNós/MinhasNotificações-Ellen/Minhas Asssinaturas/notificacao.html">Minhas notificações</a></li>
            <li><a href="/codigo-fonte/PesquisaAssinaturas-Gabriel/index.html">Pesquisa assinaturas</a></li>
            <li><a href="/codigo-fonte/Home-Gabriel/home.html#contato">Contato</a></li>
          </ul>
        </nav>

        <div class="profile-section">
          ${botoesDireita}
        </div>
      </header>

      <div class="gradient-bar"></div>

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

    const currentPage = window.location.pathname;
    const links = headerContainer.querySelectorAll("nav ul li a");

    links.forEach((link) => {
      try {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if (linkPath === currentPage) {
          link.classList.add("active");
        }
      } catch (e) {}
    });

    const menuToggle = headerContainer.querySelector('.menu-toggle');
    const mainNav = headerContainer.querySelector('.main-nav');

    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
      });
    }

    const modal = document.getElementById("modalLogin");
    const modalBox = document.querySelector(".modal-box");
    const closeX = document.getElementById("closeModalX");

    function abrirModal() {
      modal.style.display = "flex";
    }

    if (closeX) {
      closeX.addEventListener("click", () => {
        modal.style.display = "none";
      });
    }

    if (modalBox) {
      modalBox.addEventListener("click", (e) => e.stopPropagation());
    }

    if (modal) {
      modal.addEventListener("click", (e) => {
        if (!modalBox.contains(e.target)) {
          modal.style.display = "none";
        }
      });
    }

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
  }

  const footerContainer = document.getElementById("footer");
  if (footerContainer) {
    footerContainer.innerHTML = `
      <footer class="main-footer">
        <div class="footer-top">
          <h3>Entre em contato</h3>
          <p>Receba dicas e orientações diretamente na sua caixa de entrada. É rápido, prático e vale a pena – prometemos!</p>
          <div class="footer-form">
            <input type="email" placeholder="Digite seu e-mail" />
            <div class="footer-check">
              <input type="checkbox" id="confirm" />
              <label for="confirm">Confirmo que tenho mais de 16 anos e concordo com os Termos e Condições e a Política de Privacidade.</label>
            </div>
            <button>Inscrever-se</button>
          </div>
        </div>
        <hr class="footer-divider">
        <div class="footer-bottom">
          <div class="footer-social">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <ul class="footer-links">
            <li>Sobre nós</li>
            <li>Contato</li>
            <li>FAQ</li>
            <li>Termos e condições</li>
            <li>Política de cookies</li>
            <li>Privacidade</li>
          </ul>
          <p class="footer-copy">Copyright © 2025 - Assinatrack</p>
        </div>
      </footer>
    `;
  }
});
