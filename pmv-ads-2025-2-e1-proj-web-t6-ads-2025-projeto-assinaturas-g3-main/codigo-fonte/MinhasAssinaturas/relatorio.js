function calcularTotais(dados) {
    const totais = {
        Streaming: { mes: 0, ano: 0, qtd: 0 },
        Pessoal: { mes: 0, ano: 0, qtd: 0 },
        Negócios: { mes: 0, ano: 0, qtd: 0 }
    };

    const hoje = new Date();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    dados.forEach(item => {
        const categoria = item.categoria;

        let valor = Number(String(item.valor).replace(/[R$\s]/g, "").replace(",", "."));
        if (isNaN(valor)) valor = 0;

        // Vencimento
        const [dia, mes, ano] = item.vencimento.split("/").map(Number);

        // Total no mês
        if (mes === mesAtual && ano === anoAtual) {
            totais[categoria].mes += valor;
        }

        // Total no ano
        if (ano === anoAtual) {
            totais[categoria].ano += valor;
        }

        totais[categoria].qtd++;
    });

    return totais;
}
// =============================
// MODAL EXPORTAÇÃO
// =============================
function abrirModalExportar() {
    const modal = document.getElementById("modalExportar");
    modal.classList.add("show");
}

function fecharModalExportar() {
    const modal = document.getElementById("modalExportar");
    modal.classList.remove("show");
}

// =============================
// EXPORTAR PDF (LocalStorage)
// =============================
function exportarPDF() {
    const dados = JSON.parse(localStorage.getItem('assinaturas')) || [];

    if (dados.length === 0) {
        alert("Nenhuma assinatura adicionada! Adicione assinaturas antes de exportar o relatório.");
        return;
    }

    const totais = calcularTotais(dados);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.setFontSize(14);
    pdf.text("Relatório de Assinaturas", 10, 10);

    let y = 20;

    pdf.setFontSize(12);
    pdf.text("Resumo por Categoria", 10, y);
    y += 10;

    Object.keys(totais).forEach(cat => {
        pdf.text(
            `${cat}: Mês R$ ${totais[cat].mes.toFixed(2)} | Ano R$ ${totais[cat].ano.toFixed(2)} | Qtde ${totais[cat].qtd}`,
            10,
            y
        );
        y += 8;
    });

    y += 10;
    pdf.setFontSize(12);
    pdf.text("Detalhes", 10, y);
    y += 10;

    dados.forEach((item, i) => {
        pdf.text(
            `${i + 1}. ${item.nome} | ${item.valor} | ${item.pagamento} | ${item.status} | ${item.vencimento} | ${item.categoria}`,
            10,
            y
        );
        y += 8;

        if (y > 270) {
            pdf.addPage();
            y = 20;
        }
    });

    pdf.save("relatorio-assinaturas.pdf");
    fecharModalExportar();
}

// =============================
// EXPORTAR EXCEL (LocalStorage)
// =============================
function exportarExcel() {
    const dados = JSON.parse(localStorage.getItem('assinaturas')) || [];

    if (dados.length === 0) {
        alert("Nenhuma assinatura adicionada! Adicione assinaturas antes de exportar o relatório.");
        return;
    }

    const totais = calcularTotais(dados);

    const resumo = Object.keys(totais).map(cat => ({
        Categoria: cat,
        "Total no Mês (R$)": totais[cat].mes.toFixed(2).replace(".", ","),
        "Total no Ano (R$)": totais[cat].ano.toFixed(2).replace(".", ","),
        "Qtde Assinaturas": totais[cat].qtd
    }));

    const wb = XLSX.utils.book_new();

    // Aba Resumo
    const wsResumo = XLSX.utils.json_to_sheet(resumo);
    XLSX.utils.book_append_sheet(wb, wsResumo, "Resumo");

    // Aba Detalhes
    const wsDetalhes = XLSX.utils.json_to_sheet(dados);
    XLSX.utils.book_append_sheet(wb, wsDetalhes, "Detalhes");

    XLSX.writeFile(wb, "relatorio-assinaturas.xlsx");

    fecharModalExportar();
}
