//Objeto para agrupar as transações por data

import { Transacao } from "./Transacao.js";

export type GrupoTransacao = {
    label: string;
    transacoes: Transacao[];
}