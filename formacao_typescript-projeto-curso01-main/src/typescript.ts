var valor: number = 3000;
var nome: string = "";
var isPago: boolean = false;
var qualquer: any = "";
qualquer = 22;

//Arrays

const lista: number[] = [];
lista.push(13, 22.5, 12, 89,1.58);

//Tipos Personalizados (Type Alias)
type Operacao = {
    tipoOperacao: TipoOperacao;
    data: Date;
    valor: number;
}

//Enum
enum TipoOperacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaOperacao: Operacao = {
    tipoOperacao: TipoOperacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
}