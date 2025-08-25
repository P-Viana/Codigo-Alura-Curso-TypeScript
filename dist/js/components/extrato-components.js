import Conta from "../types/conta";
import { formatarMoeda } from "../utils/formatadores";
import { formatoData } from "../types/formato-data";
const elementoRegistroTransacoesExtrato = document.querySelector(".extrato .registro-transacoes");
function renderizarExtrato() {
    const gruposTransacoes = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes = "";
    for (let gruposTransacao of gruposTransacoes) {
        let htmlTransacaoItem = "";
        for (let transacao of gruposTransacao.transacoes) {
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                    <time class="data">${transacao.data, formatoData.DIA_MES})}</time>
            </div>`;
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${gruposTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>`;
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações</div>";
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}
const ExtratoComponent = {
    atualizarExtrato() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
