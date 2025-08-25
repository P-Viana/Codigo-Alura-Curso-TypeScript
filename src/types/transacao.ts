import { tipoTransacao } from "./tipo-transacao.js";

export type Transacao = {
    tipoTransacao: tipoTransacao;
    valor: number;
    data: Date;
}

