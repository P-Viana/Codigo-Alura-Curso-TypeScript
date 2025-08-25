import Conta from "../types/conta";
import { grupoTransacao } from "../types/grupo-transacao";
import { formatarMoeda } from "../utils/formatadores";
import { Transacao } from "../types/transacao";
import { formatoData } from "../types/formato-data";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

function renderizarExtrato():void{
    const gruposTransacoes: grupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacoes: string = "";

    for (let gruposTransacao of gruposTransacoes){
        let htmlTransacaoItem: string = "";
        for (let transacao of gruposTransacao.transacoes){
            htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTransacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
                </div>
                    <time class="data">${transacao.data, formatoData.DIA_MES})}</time>
            </div>`
        }
        htmlRegistroTransacoes += `
            <div class="transacoes-group">
                <strong class="mes-group">${gruposTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>`
    }
    if (htmlRegistroTransacoes === "") {
        htmlRegistroTransacoes = "<div>Não há transações</div>"
    }
    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
    
}

const ExtratoComponent = {
    atualizarExtrato():void{
        renderizarExtrato();
    }
}
export default ExtratoComponent;