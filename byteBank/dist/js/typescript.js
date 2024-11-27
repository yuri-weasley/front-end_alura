// Tipos primitivos
let valor = 3000;
let nome = "";
let isPago = false;
let qualquer = "";
qualquer = 22;
// Arrays
const lista = [];
lista.push(13, 22.5, 22, 89, 1.58);
// Enum (As enumerações ou enums são conjuntos de valores fixos que definimos no nosso código, tornando mais fácil identificar valores na escrita desse código. Controle centralizado dentro da apliacação).
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.DEPOSITO,
    data: new Date(),
    valor: 0
};
console.log(novaTransacao);
