function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// var contador = 0; (para uso do whiel)

for (var contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; // template string. String q tá sendo montada a cada iteração do while

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento) {

        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
    
}

/* 
while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`; //string q tá sendo montada a cada iteração do whil
    
    //console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador++;

    //console.log(contador);
}
*/






/* 
Forma não muito útil do código/funcionalidade:

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}
document.querySelector('.tecla_pom').onclick = tocaSomPom;

function tocaSomClap() {
    document.querySelector('#som_tecla_clap').play();
}
document.querySelector('.tecla_clap').onclick = tocaSomClap; 

-------------------------------------------Coment---------------------------------------------
Qnd colocamos os parêntesis imediatamente numa função, não guardamos essa função no atributo onclick. Nós estamos dizendo para o navegador executar a função. Portanto para guardar a função dentro do atributo onclick não podemos escrever os parêntesis. Tem a ver com a ordem de execução do código JS. 
----------------------------------------------------------------------------------------------

function tocaSomTim() {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_tim').onclick = tocaSomTim;

function tocaSomPuff() {
    document.querySelector('#som_tecla_puff').play();
}
document.querySelector('.tecla_puff').onclick = tocaSomPuff;

function tocaSomSplash() {
    document.querySelector('#som_tecla_splash').play();
}
document.querySelector('.tecla_splash').onclick = tocaSomSplash;

function tocaSomToim() {
    document.querySelector('#som_tecla_toim').play();
}
document.querySelector('.tecla_toim').onclick = tocaSomToim;

function tocaSomPsh() {
    document.querySelector('#som_tecla_psh').play();
}
document.querySelector('.tecla_psh').onclick = tocaSomPsh;

function tocaSomTic() {
    document.querySelector('#som_tecla_tic').play();
}
document.querySelector('.tecla_tic').onclick = tocaSomTic;

--------------------------Coment----------------------------- 
function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}
document.querySelector('.tecla_tom').onclick = tocaSomTom;
-------------------------------------------------------------

function tocaSomTom() {
    document.querySelector('#som_tecla_tom').play();
}
*/