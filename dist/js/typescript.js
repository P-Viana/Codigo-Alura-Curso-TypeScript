// Tipos primitivos
let numero = 2000;
let nome = "Pedro";
let verificar = true;
let aleatorio = 22;
aleatorio = "Olá, posso receber qualquer valor!";
// Arrays
const lista = [];
lista.push(22, 5, 23.3);
// Enum
var tipoTransacao;
(function (tipoTransacao) {
    tipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    tipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    tipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(tipoTransacao || (tipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
