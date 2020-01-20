function funcionAjaxSincrona() {
    // para crear un objeto XHR lo podremos hacer con la siguiente llamada.
    miXHR = new objetoXHR();

    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.

    llamadaSincrona(document.getElementById("resultadoSincrono"), "servidor/datos.php");
}


function funcionAjaxAsincrona() {
    // para crear un objeto XHR lo podremos hacer con la siguiente llamada.
    miXHR = new objetoXHR();

    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.

    llamadaAsincrona("servidor/datos.php");
}



function escribirResultado(identificadorElemento) {
    return function(textoMostrar) {
        document.getElementById(identificadorElemento).innerHTML = "";
        document.getElementById(identificadorElemento).appendChild(document.createTextNode(textoMostrar));
    }
}