const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;
var tempoDecorridoEmSegundos = 1500;
var intervaloId = null;
const somPlay = new Audio('sons/play.wav');
const somPause = new Audio('sons/pause.mp3');
const somBeep = new Audio('sons/beep.mp3');

const temp = document.querySelector('.app__card-timer');
const imagem = document.querySelector('.app__image');
const frase = document.querySelector('.app__title');
var btnInicio = document.querySelector('.app__card-primary-button');
var btnFoco = document.querySelector('.app__card-button--foco');
var btnCurto = document.querySelector('.app__card-button--curto');
var btnLongo = document.querySelector('.app__card-button--longo');
const tempoFoco = 1500;
const tempoCurto = 300;
const tempoLongo = 900;
const imgStartPause = document.querySelector('#start-pause img.app__card-primary-butto-icon');

/*
focoBt.addEventListener('click', () => {
    arrowfunction??? É uma forma de declara uma função anônima
    html.setAttribute('data-contexto', 'foco');
    imagem.setAttribute('src', 'imagens/foco.png');
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto');
    imagem.setAttribute('src', 'imagens/descanso-curto.png');
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo');
    imagem.setAttribute('src', 'imagens/descanso-longo.png');
})
*/

musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})
function alterarContexto(contexto) {
    mostrarTempo()
    botoes.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `imagens/${contexto}.png`);

    switch(contexto) {
        case "foco":
            frase.innerHTML = `Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
        break;
        case "descanso-curto":
            frase.innerHTML = `Que tal dar uma respirada?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
        case "descanso-longo":
            frase.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}
focoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300;
  alterarContexto('descanso-curto');
  curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0) {
        somBeep.play();
        alert('Tempo finalizado!');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if(focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId) {
        somPause.play();
        zerar();
        return;
    }
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000); //função a ser executada e o tempo em ms em que a função deve se repetir
    iniciarOuPausarBt.textContent = 'Pausar';
    imgStartPause.setAttribute('src', 'imagens/pause.png');

}
function zerar() {
    clearInterval(intervaloId) //cancela uma ação repetitiva e cronometrada que foi previamente estabelecida pela setInterval
    iniciarOuPausarBt.textContent = 'Começar';
    imgStartPause.setAttribute('src', 'imagens/play_arrow.png');
    intervaloId = null; //torna nulo de novo
}

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();