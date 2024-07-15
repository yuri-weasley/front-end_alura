import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes");

renderizarExtrato();
function renderizarExtrato(): void {
    const gruposTransacoes: GrupoTransacao[] = Conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    var htmlRegistroTransacoes: string = "";

    for (var grupoTransacao of gruposTransacoes) {
        var htmlTransacaoItem: string = "";
        for (var transacao of grupoTransacao.transacoes) {
             htmlTransacaoItem += `
             <div class="transacao-item">
                        <div class="transacao-info">
                            <span class="tipo">${transacao.tipoTransacao}</span>
                            <strong class="valor">${formatarMoeda(transacao.valor)}-R$ 36,00</strong>
                        </div>
                        <time class="data">${formatarDara(transacao.data, FormatoData.DIA_MES)}</time>
                    </div>
             `;
        }
        htmlRegistroTransacoes += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>
        `;
    }
    if (htmlRegistroTransacoes === ""){
        htmlRegistroTransacoes = "<div>Não há transações registradas.</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacoes;
}