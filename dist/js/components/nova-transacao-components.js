import SaldoComponent from "./saldo-components.js";
import Conta from "../types/conta.js";
import ExtratoComponent from "./extrato-components.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
// Adiciona o evento submit, ou seja enviar
elementoFormulario.addEventListener("submit", function (event) {
    // Evita que ao formulário ser recebido, a página recarregue
    try {
        event.preventDefault();
        // Exibe alerta se NÂO validado, ou seja, está vazio
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulário!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let TipoTransacao = inputTipoTransacao.value;
        let Valor = inputValor.valueAsNumber;
        let Data = new Date(inputData.value + "00:00:00");
        // Cria o objeto nova transação
        const novaTransacao = {
            tipoTransacao: TipoTransacao,
            valor: Valor,
            data: Data
        };
        Conta.registrarTransacao(novaTransacao);
        SaldoComponent.atualizarSaldo();
        ExtratoComponent.atualizarExtrato();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
