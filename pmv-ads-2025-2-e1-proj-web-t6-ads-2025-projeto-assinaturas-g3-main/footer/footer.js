const footerContainer = document.getElementById("footer");

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
