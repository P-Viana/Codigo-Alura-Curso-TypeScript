import { Transacao } from "../types/transacao.js";
import { tipoTransacao } from "../types/tipo-transacao.js";
import SaldoComponent from "./saldo-components.js";
import Conta from "../types/conta.js";
import ExtratoComponent from "./extrato-components.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
// Adiciona o evento submit, ou seja enviar
elementoFormulario.addEventListener("submit", function(event){
    // Evita que ao formulário ser recebido, a página recarregue
    try{
        event.preventDefault();
    // Exibe alerta se NÂO validado, ou seja, está vazio
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos do formulário!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data")as HTMLInputElement;

    let TipoTransacao: tipoTransacao = inputTipoTransacao.value as tipoTransacao;
    let Valor: number = inputValor.valueAsNumber;
    let Data: Date = new Date(inputData.value + "00:00:00");
    

// Cria o objeto nova transação
    const novaTransacao:Transacao = {
        tipoTransacao: TipoTransacao,
        valor: Valor,
        data: Data
    }

    Conta.registrarTransacao(novaTransacao);
    SaldoComponent.atualizarSaldo()
    ExtratoComponent.atualizarExtrato();
    elementoFormulario.reset(); 
    }catch(error){
        alert(error.message);
    }
})
