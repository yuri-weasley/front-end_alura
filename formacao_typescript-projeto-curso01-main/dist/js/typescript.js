var valor = 3000;
var nome = "";
var isPago = false;
var qualquer = "";
qualquer = 22;
//Arrays
const lista = [];
lista.push(13, 22.5, 12, 89, 1.58);
//Enum
var TipoOperacao;
(function (TipoOperacao) {
    TipoOperacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoOperacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoOperacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoOperacao || (TipoOperacao = {}));
const novaOperacao = {
    tipoOperacao: TipoOperacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};
