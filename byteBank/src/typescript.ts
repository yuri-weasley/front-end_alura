// Tipos primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22.5, 22, 89, 1.58);

// Tipos personalizados (Type Alias)
type Transacao = {
    tipoTransacao: TipoTransacao; //string
    data: Date;
    valor: number;
}

// Enum (As enumerações ou enums são conjuntos de valores fixos que definimos no nosso código, tornando mais fácil identificar valores na escrita desse código. Controle centralizado dentro da apliacação).
enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
}