let numero = document.getElementById('numero');

function appendValue(value) {
  numero.value += value;
}

function calculator() {
  try {
    numero.value = eval(numero.value);
  } catch (Borrar) {
    numero.value = alert("POR FAVOR BORRAR Y DIGITAR DE NUEVO");

  }
}

function clearnumero() {
  numero.value = '';
}


function raiz(){

    return Math.sqrt(numero.value);
  }
  
  function sin(){
    return Math.sin(numero.value);
  }
  
  function coseno(){
    return Math.cos(numero.value);
  }
  function tan(){
    return Math.tan(numero.value);
  }
  
  function log(){
    return Math.log10(numero.value);
  }
  function elevado(){
    return Math.pow(numero.value);
  }