function getLista() {
  return JSON.parse(localStorage.getItem("assinaturas") || "[]");
}

function salvarLista(lista) {
  localStorage.setItem("assinaturas", JSON.stringify(lista));
}

function gerarAlerta(dataVenc) {
  const [dia, mes, ano] = dataVenc.split("/").map(Number);

  const hoje = new Date();
  const venc = new Date(ano, mes - 1, dia);

  const diff = venc - hoje;
  const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (dias < 0) return "Vencida!";
  if (dias === 0) return "Vence hoje!";
  if (dias === 1) return "Vence amanhã!";
  return `Vence em ${dias} dias.`;
}

function criarCard(item, pago = false) {
  const alerta = pago ? "Pago" : gerarAlerta(item.vencimento);

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
                    <label>${
                      pago ? "Data de pagamento" : "Data de vencimento"
                    }</label>
                    <input type="text" value="${item.vencimento}" disabled>
                </div>

                <div>
                    <label>Alerta</label>
                    <input type="text" value="${alerta}" disabled>
                </div>
            </div>
        </div>

        <div class="icons">
            <input type="checkbox" class="checkStatus" data-id="${item.id}" ${
    pago ? "checked" : ""
  }>
        </div>
    `;

  return card;
}

function filtrarPorMes(lista) {
  const filtro = document.getElementById("filtroMes").value;

  if (filtro === "todos") return lista;

  return lista.filter((item) => {
    const [d, m, a] = item.vencimento.split("/").map(Number);
    return m === Number(filtro);
  });
}

function atualizarTotalMes(lista) {
  let total = 0;

  lista.forEach((item) => {
    if (item.status !== "Pendente") return;

    let valor = Number(
      String(item.valor)
        .replace(/[R$\s]/g, "")
        .replace(",", ".")
    );
    if (!isNaN(valor)) total += valor;
  });

  document.getElementById("valorMes").value =
    "R$ " + total.toFixed(2).replace(".", ",");
}

function carregarNotificacoes() {
  const listaCompleta = getLista();
  const filtro = document.getElementById("filtroMes").value;

  const listaFiltrada = filtrarPorMes(listaCompleta);

  const pendentesEl = document.getElementById("pendentes");
  const pagosEl = document.getElementById("pagos");

  pendentesEl.innerHTML = "";
  pagosEl.innerHTML = "";

  const pendentes = listaFiltrada.filter((i) => i.status === "Pendente");
  const pagos = listaFiltrada.filter((i) => i.status === "Paga");

  pendentes.sort((a, b) => {
    const [d1, m1, a1] = a.vencimento.split("/").map(Number);
    const [d2, m2, a2] = b.vencimento.split("/").map(Number);

    return new Date(a1, m1 - 1, d1) - new Date(a2, m2 - 1, d2);
  });

  pendentes.forEach((item) => pendentesEl.appendChild(criarCard(item)));
  pagos.forEach((item) => pagosEl.appendChild(criarCard(item, true)));

  atualizarTotalMes(listaFiltrada);
}

document.addEventListener("change", (ev) => {
  if (!ev.target.classList.contains("checkStatus")) return;

  const id = Number(ev.target.dataset.id);
  const lista = getLista();
  const item = lista.find((x) => x.id === id);

  if (!item) return;

  item.status = ev.target.checked ? "Paga" : "Pendente";
  salvarLista(lista);

  carregarNotificacoes();
});

document.addEventListener("DOMContentLoaded", () => {
  carregarNotificacoes();

  document.getElementById("filtroMes").addEventListener("change", () => {
    carregarNotificacoes();
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".category-header")) return;

  const header = e.target.closest(".category-header");
  const arrow = header.querySelector(".arrow");
  const content = header.nextElementSibling;

  content.classList.toggle("open");
  arrow.style.transform = content.classList.contains("open")
    ? "rotate(90deg)"
    : "rotate(0deg)";
});
