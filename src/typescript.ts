// Tipos primitivos

let numero: number = 2000;
let nome: string = "Pedro";
let verificar: boolean = true;

let aleatorio: any = 22
aleatorio = "Olá, posso receber qualquer valor!"

// Arrays

const lista:number[] = [];

lista.push (22, 5, 23.3);

// Tipos "personalisados" ou "alias"
type transacao = {
    tipoTransacao: tipoTransacao,
    data: Date,
    valor: number
}

// Enum

enum tipoTransacao{
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao:transacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}