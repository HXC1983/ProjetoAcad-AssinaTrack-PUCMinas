const modal = document.getElementById("modal");
const modalEditar = document.getElementById("modalEditar");

const salvar = document.getElementById("salvar");
const cancelar = document.getElementById("cancelar");

const salvarEditar = document.getElementById("salvar-editar");
const cancelarEditar = document.getElementById("cancelar-editar");

const addBtn = document.querySelector(".add-btn");
const valorTotalInput = document.querySelector(".valor-total input");

let idEdicao = null;

addBtn.addEventListener("click", () => modal.classList.add("show"));
cancelar.addEventListener("click", () => modal.classList.remove("show"));
cancelarEditar.addEventListener("click", () =>
  modalEditar.classList.remove("show")
);

const vencimentoInput = document.getElementById("vencimento");
if (vencimentoInput) {
  vencimentoInput.addEventListener("input", function (e) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 2) v = v.replace(/^(\d{2})(\d)/, "$1/$2");
    if (v.length > 5) v = v.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    e.target.value = v;
  });
}

const vencimentoEditarInput = document.getElementById("vencimento-editar");
if (vencimentoEditarInput) {
  vencimentoEditarInput.addEventListener("input", function (e) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 2) v = v.replace(/^(\d{2})(\d)/, "$1/$2");
    if (v.length > 5) v = v.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
    e.target.value = v;
  });
}

if (salvar) {
  salvar.addEventListener("click", () => {
    const item = pegarDadosModal();

    if (!item.nome || !item.valor || !item.vencimento) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    const lista = getLista();
    item.id = Date.now();
    lista.push(item);

    salvarLista(lista);
    modal.classList.remove("show");
    limparModalAdicionar();
    carregar();
  });
}
const searchInput = document.querySelector(".search-input");

if (searchInput) {
  searchInput.addEventListener("input", filtrarAssinaturas);
}

function filtrarAssinaturas() {
  const termo = searchInput.value.trim().toLowerCase();
  const lista = getLista();

  const categorias = ["Streaming", "Pessoal", "Negócios"];

  categorias.forEach((cat) => {
    const sec = [...document.querySelectorAll(".category")].find(
      (s) => s.querySelector("h2").textContent === cat
    );

    const content = sec.querySelector(".category-content");
    content.innerHTML = "";

    const filtradas = lista.filter((item) => {
      if (item.categoria !== cat) return false;
      if (termo === "") return true;

      return (
        item.nome.toLowerCase().includes(termo) ||
        item.pagamento.toLowerCase().includes(termo) ||
        item.status.toLowerCase().includes(termo) ||
        item.vencimento.toLowerCase().includes(termo) ||
        item.valor.toLowerCase().includes(termo)
      );
    });

    filtradas.forEach((item) => {
      const card = document.createElement("div");
      card.className = "subscription-card";

      card.innerHTML = `
        <div class="card-left">
          <span>${item.nome}</span>

          <div class="fields">
            <div>
              <label>Valor</label>
              <input type="text" value="${item.valor}" disabled>
            </div>
            <div>
              <label>Vencimento</label>
              <input type="text" value="${item.vencimento}" disabled>
            </div>
            <div>
              <label>Pagamento</label>
              <input type="text" value="${item.pagamento}" disabled>
            </div>
            <div>
              <label>Status</label>
              <input type="text" value="${item.status}" disabled>
            </div>
          </div>
        </div>

        <div class="icons">
          <i class="bi bi-pencil edit" data-id="${item.id}" title="Editar"></i>
          <i class="bi bi-trash delete" data-id="${item.id}" title="Excluir"></i>
        </div>
      `;

      content.appendChild(card);
    });

    if (filtradas.length === 0) {
      content.innerHTML =
        "<p style='opacity:0.5;'>Nenhuma assinatura encontrada.</p>";
    }
  });

  ativarBotoes();
}

function pegarDadosModal() {
  return {
    nome: (document.getElementById("nome") || {}).value || "",
    valor: (document.getElementById("valor") || {}).value || "",
    vencimento: (document.getElementById("vencimento") || {}).value || "",
    pagamento: (document.getElementById("pagamento") || {}).value || "",
    status: (document.getElementById("status") || {}).value || "",
    categoria:
      (document.getElementById("categoria") || {}).value || "Streaming",
  };
}

function limparModalAdicionar() {
  if (document.getElementById("nome"))
    document.getElementById("nome").value = "";
  if (document.getElementById("valor"))
    document.getElementById("valor").value = "";
  if (document.getElementById("vencimento"))
    document.getElementById("vencimento").value = "";
  if (document.getElementById("pagamento"))
    document.getElementById("pagamento").value = "PIX";
  if (document.getElementById("status"))
    document.getElementById("status").value = "Pendente";
  if (document.getElementById("categoria"))
    document.getElementById("categoria").value = "Streaming";
}

function getLista() {
  return JSON.parse(localStorage.getItem("assinaturas") || "[]");
}

function salvarLista(lista) {
  localStorage.setItem("assinaturas", JSON.stringify(lista));
}

document.addEventListener("DOMContentLoaded", carregar);

function carregar() {
  const categorias = ["Streaming", "Pessoal", "Negócios"];
  const lista = getLista();

  categorias.forEach((cat) => {
    const sec = [...document.querySelectorAll(".category")].find(
      (s) => s.querySelector("h2").textContent === cat
    );

    const content = sec.querySelector(".category-content");
    content.innerHTML = "";

    const filtradas = lista.filter((item) => item.categoria === cat);

    filtradas.forEach((item) => {
      const card = document.createElement("div");
      card.className = "subscription-card";

      card.innerHTML = `
        <div class="card-left">
          <span>${escapeHtml(item.nome || "Assinatura")}</span>
          <div class="fields">
            <div>
              <label>Valor</label>
              <input type="text" value="${escapeHtml(
                item.valor || ""
              )}" disabled>
            </div>
            <div>
              <label>Vencimento</label>
              <input type="text" value="${escapeHtml(
                item.vencimento || ""
              )}" disabled>
            </div>
            <div>
              <label>Pagamento</label>
              <input type="text" value="${escapeHtml(
                item.pagamento || ""
              )}" disabled>
            </div>
            <div>
              <label>Status</label>
              <input type="text" value="${escapeHtml(
                item.status || ""
              )}" disabled>
            </div>
          </div>
        </div>

        <div class="icons">
          <div class="row">
            <i class="bi bi-pencil edit" data-id="${
              item.id
            }" title="Editar"></i>
<i class="bi bi-trash delete" data-id="${item.id}" title="Excluir"></i>

          </div>
        </div>
      `;

      content.appendChild(card);
    });
  });

  atualizarTotal();
  ativarEventosCategorias();
  ativarBotoes();
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function atualizarTotal() {
  const lista = getLista();
  let total = 0;

  lista.forEach((item) => {
    try {
      const v = Number(
        String(item.valor)
          .replace(/[R$\s]/g, "")
          .replace(",", ".")
      );
      if (!isNaN(v)) total += v;
    } catch (e) {}
  });

  valorTotalInput.value = "R$ " + total.toFixed(2).replace(".", ",");
}

function ativarBotoes() {
  document.querySelectorAll(".edit").forEach((btn) => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      editarAssinatura(btn.dataset.id);
    };
  });

  document.querySelectorAll(".delete").forEach((btn) => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      excluirAssinatura(btn.dataset.id);
    };
  });
}

function editarAssinatura(id) {
  idEdicao = Number(id);
  const lista = getLista();
  const item = lista.find((x) => x.id === idEdicao);
  if (!item) return alert("Item não encontrado");

  if (document.getElementById("nome-editar"))
    document.getElementById("nome-editar").value = item.nome || "";
  if (document.getElementById("valor-editar"))
    document.getElementById("valor-editar").value = item.valor || "";
  if (document.getElementById("vencimento-editar"))
    document.getElementById("vencimento-editar").value = item.vencimento || "";
  if (document.getElementById("pagamento-editar"))
    document.getElementById("pagamento-editar").value = item.pagamento || "PIX";
  if (document.getElementById("status-editar"))
    document.getElementById("status-editar").value = item.status || "Pendente";

  modalEditar.classList.add("show");
}

if (salvarEditar) {
  salvarEditar.addEventListener("click", () => {
    const lista = getLista();
    const item = lista.find((x) => x.id === idEdicao);
    if (!item) return alert("Erro ao editar: item não encontrado.");

    item.nome =
      (document.getElementById("nome-editar") || {}).value || item.nome;
    item.valor =
      (document.getElementById("valor-editar") || {}).value || item.valor;
    item.vencimento =
      (document.getElementById("vencimento-editar") || {}).value ||
      item.vencimento;
    item.pagamento =
      (document.getElementById("pagamento-editar") || {}).value ||
      item.pagamento;
    item.status =
      (document.getElementById("status-editar") || {}).value || item.status;

    salvarLista(lista);
    modalEditar.classList.remove("show");
    carregar();
  });
}

function excluirAssinatura(id) {
  if (!confirm("Tem certeza que deseja excluir esta assinatura?")) return;
  const lista = getLista().filter((x) => x.id != id);
  salvarLista(lista);
  carregar();
}

function ativarEventosCategorias() {
  document.querySelectorAll(".category-header").forEach((header) => {
    const sec = header.parentElement;
    const arrow = header.querySelector(".arrow");
    const cont = sec.querySelector(".category-content");

    cont.style.overflow = "hidden";

    header.onclick = () => {
      if (cont.classList.contains("open")) {
        cont.classList.remove("open");
        cont.classList.add("sub-close");
        arrow.style.transform = "rotate(0deg)";
      } else {
        cont.classList.remove("sub-close");
        cont.classList.add("sub-open", "open");
        arrow.style.transform = "rotate(90deg)";
      }
    };
  });
}
function atualizarMesSeguinte() {
  const spanMes = document.querySelector(".valor-total span");
  if (!spanMes) return;

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const hoje = new Date();
  let mesAtual = hoje.getMonth();
  let mesSeguinte = (mesAtual + 1) % 12;

  spanMes.textContent = `Valor aberto do mês de ${meses[mesSeguinte]}`;
}

document.addEventListener("DOMContentLoaded", atualizarMesSeguinte);
