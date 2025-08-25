import { formatarMoeda, formatarData } from "../utils/formatadores.js";
import { formatoData } from "../types/formato-data.js";
import Conta from "../types/conta.js";
// Pegar o primeiro valor com classe saldo-valor e valor.
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), formatoData.DIA_SEMANA_DIA_MES_ANO);
}
rendereizarSaldo();
function rendereizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizarSaldo() {
        rendereizarSaldo();
    }
};
export default SaldoComponent;
