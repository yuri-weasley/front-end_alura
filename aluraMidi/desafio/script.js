const listaDeTeclas = document.querySelectorAll('input[type=button]');
const campo = document.querySelector('input[type=tel]');

for (var i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i];
  
  tecla.onclick = function() {
    campo.value = campo.value + tecla.value;
  }
}