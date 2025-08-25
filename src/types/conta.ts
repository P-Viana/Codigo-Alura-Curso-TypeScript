import { Transacao } from "./transacao.js";
import { tipoTransacao } from "./tipo-transacao.js";
import { grupoTransacao } from "./grupo-transacao.js";

let saldo: number = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transacoes"),(key:string, value:string)=>{
    if (key == "data") {
        return new Date(value);
    }
    return value;
}) || [];

function debitar(valor: number): void{
    if (valor < 0) {
       throw new Error("O valor debitado deve ser maior que 0");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente!");
    }
    saldo-=valor;
    localStorage.setItem("saldo", saldo.toString())
}

function depositar(valor: number): void{
    if (valor < 0) {
       throw new Error("O valor depositado deve ser maior que 0");
    }
    saldo+=valor;
    localStorage.setItem("saldo", saldo.toString())
}



const Conta = {
    getSaldo(){
        return saldo;
    },
    getDataAcesso():Date{
        return new Date();
    },
    getGruposTransacoes():grupoTransacao[] {
        const gruposTransacoes: grupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacao: string = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-BR", {month: "long", year: "numeric"});
            if (labelAtualGrupoTransacao != labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1).transacoes.push(transacao);
        }
        return gruposTransacoes;
    },
    registrarTransacao(novaTransacao: Transacao):void{
        if (novaTransacao.tipoTransacao == tipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor)
        }
        else if(novaTransacao.tipoTransacao == tipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == tipoTransacao.PAGAMENTO_BOLETO){
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else{
            throw new Error("Tipo de Transação inválida!!!");
        }
        transacoes.push(novaTransacao);
        console.log(this.getGruposTransacoes());
        localStorage.setItem("transacoes", JSON.stringify(transacoes));
    }
}
export default Conta;