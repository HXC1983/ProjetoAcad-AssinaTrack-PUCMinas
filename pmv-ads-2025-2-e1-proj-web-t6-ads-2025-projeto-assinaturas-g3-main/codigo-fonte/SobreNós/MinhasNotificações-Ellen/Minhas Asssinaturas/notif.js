/* ----------------------------------------
      NavBar Padrão
---------------------------------------- */
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
        activePage = "Como funciona";
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
                  <li><a href="sobre-nos.html">Sobre nós</a></li>
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

  if (document.getElementById("pendentes")) {
    preencherMeses();
    render();
  }
});

/* ----------------------------------------
      SISTEMA DE ASSINATURAS
---------------------------------------- */

function carregarBanco() {
  let banco = localStorage.getItem("assinaturas");
  if (!banco) {
    banco = {
      assinaturas: {
        netflix: { nome: "Netflix", valor: "R$ 0,00", data: "", status: "", pagoEm: "" },
        disney: { nome: "Disney", valor: "R$ 0,00", data: "", status: "", pagoEm: "" },
        prime: { nome: "Prime Video", valor: "R$ 0,00", data: "", status: "", pagoEm: "" },
        hbo: { nome: "HBO", valor: "R$ 0,00", data: "", status: "", pagoEm: "" },
        spotify: { nome: "Spotify", valor: "R$ 0,00", data: "", status: "", pagoEm: "" }
      }
    };
    localStorage.setItem("assinaturas", JSON.stringify(banco));
    return banco;
  }
  return JSON.parse(banco);
}

function salvarBanco(banco) {
  localStorage.setItem("assinaturas", JSON.stringify(banco));
}

function diasAte(dataStr) {
  if (!dataStr) return null;

  let parts, dt;

  if (dataStr.includes("-")) {
    parts = dataStr.split("-");
    dt = new Date(parts[0], parts[1] - 1, parts[2]);
  } else if (dataStr.includes("/")) {
    parts = dataStr.split("/");
    dt = new Date(parts[2], parts[1] - 1, parts[0]);
  } else return null;

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  dt.setHours(0, 0, 0, 0);

  return Math.ceil((dt - hoje) / (1000 * 60 * 60 * 24));
}

function render() {
  const banco = carregarBanco();
  const pendentesEl = document.getElementById("pendentes");
  const pagosEl = document.getElementById("pagos");

  pendentesEl.innerHTML = "";
  pagosEl.innerHTML = "";

  for (let key in banco.assinaturas) {
    const a = banco.assinaturas[key];
    const diff = diasAte(a.data);

    let alertaTexto = "";
    if (diff === null) alertaTexto = "";
    else if (diff > 1) alertaTexto = `Vence em ${diff} dias.`;
    else if (diff === 1) alertaTexto = `Vence em 1 dia.`;
    else if (diff === 0) alertaTexto = `Vence hoje!`;
    else alertaTexto = `Venceu`;

    const item = document.createElement("div");
    item.className = "notificacao";
    item.innerHTML = `
      <div class="info">
        <h3>${a.nome}</h3>
        <div class="campos">
          <div class="field"><label>Valor</label><input value="${a.valor}" onchange="atualizarCampo('${key}','valor',this.value)"></div>
          <div class="field"><label>Data de vencimento</label><input type="date" value="${a.data}" onchange="atualizarCampo('${key}','data',this.value)"></div>
          <div class="field"><label>Alerta</label><input value="${alertaTexto}" disabled></div>
        </div>
        ${a.status === "pago" ? `<div class="pago-em">Pago em: ${a.pagoEm}</div>` : ""}
      </div>

      <div class="actions">
        <label><input type="checkbox" ${a.status === "pago" ? "checked" : ""} onchange="marcarPago('${key}', this.checked)"> Paguei</label>
        <button onclick="editarAssinaturaPrompt('${key}')">Editar</button>
      </div>
    `;

    if (a.status === "pago") pagosEl.appendChild(item);
    else pendentesEl.appendChild(item);
  }

  atualizarValorAberto();
}

window.atualizarCampo = function (servico, campo, valor) {
  const banco = carregarBanco();
  banco.assinaturas[servico][campo] = valor;
  salvarBanco(banco);
  render();
};

window.marcarPago = function (servico, isPago) {
  const banco = carregarBanco();
  banco.assinaturas[servico].status = isPago ? "pago" : "";
  banco.assinaturas[servico].pagoEm = isPago ? new Date().toLocaleDateString("pt-BR") : "";
  salvarBanco(banco);
  render();
};

window.editarAssinaturaPrompt = function (servico) {
  const banco = carregarBanco();
  const atual = banco.assinaturas[servico];

  const novoValor = prompt("Valor (ex: R$ 20,00):", atual.valor) || atual.valor;
  const novaData = prompt("Data (yyyy-mm-dd ou dd/mm/yyyy):", atual.data) || atual.data;

  atual.valor = novoValor;
  atual.data = novaData;
  salvarBanco(banco);
  render();
};

function atualizarValorAberto() {
  const banco = carregarBanco();
  const select = document.getElementById("mes-select");
  const valorInput = document.getElementById("valor-aberto");
  const mesIndex = parseInt(select.value, 10);

  let total = 0;
  for (let k in banco.assinaturas) {
    const a = banco.assinaturas[k];
    const numero = Number(String(a.valor).replace(/[R$\s\.]/g, "").replace(",", "."));
    if (isNaN(numero)) continue;

    if (a.data) {
      let parts, dt;
      if (a.data.includes("-")) {
        parts = a.data.split("-");
        dt = new Date(parts[0], parts[1] - 1, parts[2]);
      } else {
        parts = a.data.split("/");
        dt = new Date(parts[2], parts[1] - 1, parts[0]);
      }
      if (dt.getMonth() === mesIndex && a.status !== "pago") total += numero;
    }
  }

  valorInput.value = "R$ " + total.toFixed(2).replace(".", ",");
}

function preencherMeses() {
  const sel = document.getElementById("mes-select");
  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  
  sel.innerHTML = meses
    .map((m, i) => `<option value="${i}" ${i === new Date().getMonth() ? "selected" : ""}>${m}</option>`)
    .join("");

  sel.addEventListener("change", atualizarValorAberto);
}
