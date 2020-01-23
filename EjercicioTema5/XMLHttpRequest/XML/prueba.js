function tratarResultadoXML(textoXMLRespuesta) {
    let datos = textoXMLRespuesta;

    // Tenemos que recorrer el fichero XML empleando los métodos del DOM
    let cachimba = datos.documentElement.getElementsByTagName("cachimba");

    // En la variable salida compondremos el código HTML de la tabla a imprimir.
    let salida = "<table border='1'><tr><th>ID</th><th>MARCA</th><th>MODELO</th><th>Precio</th></tr>";

    // Hacemos un bucle para recorrer todos los elementos CD.
    for (let i = 0; i < cachimba.length; i++) {
        salida += "<tr>";

        let id = cachimba[i].getElementsByTagName("id");
        salida += "<td>" + id[0].firstChild.nodeValue + "</td>";

        let marca = cachimba[i].getElementsByTagName("marca");
        salida += "<td>" + marca[0].firstChild.nodeValue + "</td>";

        let modelo = cachimba[i].getElementsByTagName("modelo");
        salida += "<td>" + modelo[0].firstChild.nodeValue + "</td>";


        let precio = cachimba[i].getElementsByTagName("precio");
        salida += "<td>" + precio[0].firstChild.nodeValue + "</td>";




        // Cerramos la fila.
        salida += "</tr>";
    }

    salida += "</table>";

    // Imprimimos la tabla dentro del contenedor resultados.
    document.getElementById("resultadoAsincronoXML").innerHTML = salida;
}

function funcionAjaxSincronaXML() {
    llamadaAsincrona2("prueba.php", "GET", null, "XML", tratarResultadoXML);
}

function objetoXHR() {
    if (window.XMLHttpRequest) { // El navegador implementa la interfaz XHR de forma nativa
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) { // El navegador no implementa la interfaz XHR de forma nativa
        // Por ejemplo: Internet explorer.
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                /* Se intenta crear el objeto en Internet Explorer comenzando
                en la versión más moderna del objeto hasta la primera versión.
                En el momento que se consiga crear el objeto, saldrá del bucle
                devolviendo el nuevo objeto creado. */

                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) {} //Capturamos el error,
        }
    }
    /* Si llegamos aquí es porque el navegador no posee ninguna forma de crear el objeto.
     Emitimos un mensaje de error usando el objeto Error.
     Más información sobre gestión de errores en:
     HTTP://www.javascriptkit.com/javatutors/trycatch2.sHTML
     */
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

/////////////////////////////////////////////////////////
// Función llamadaSincrona: carga el contenido de la url
// en el objeto que se le pasa como referencia,
// usando una petición AJAX de forma SINCRONA.
/////////////////////////////////////////////////////////
function llamadaSincrona(elementoDOM, url) {
    if (miXHR) {

        //Si existe el objeto miXHR
        miXHR.open('GET', url, false); //Abrimos la url, false=SINCRONA

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);

        //Escribimos la respuesta recibida de la petición AJAX en el objeto DIV

        elementoDOM.appendChild(document.createTextNode(tratarResultadoXML(miXHR.responseText)));

    }
}

function funcionAjaxSincrona() {
    // para crear un objeto XHR lo podremos hacer con la siguiente llamada.
    miXHR = new objetoXHR();

    // Cargamos en el objeto con ID resultados el contenido
    // del fichero datos.txt empleando una petición AJAX.

    llamadaSincrona(document.getElementById("resultadoSincronoXML"), "prueba.php");
}

function llamadaAsincrona(url) {
    if (miXHR) {
        alert("Comenzamos la peticion AJAX");
        document.getElementById('estado').innerHTML = "";
        document.getElementById('resultadoAsincrono').innerHTML = "";

        //Si existe el objeto miXHR
        miXHR.open('GET', url, true); //Abrimos la url, false=ASINCRONA

        miXHR.onreadystatechange = comprobarEstadoPeticion;

        // Hacemos la petición al servidor. Como parámetro del método send:
        // null -> cuando usamos GET.
        // cadena con los datos -> cuando usamos POST

        miXHR.send(null);
    }
}

function ejecutarFuncionAjax(tipoRespuesta, funcion) {
    return function() {
        if (this.readyState == 4 && this.status == 200) {
            let respuesta = "";
            switch (tipoRespuesta) {
                case "XML":
                    respuesta = this.responseXML;
                    break;
                default:
                    respuesta = this.responseText;
                    break;
            }
            funcion(respuesta);


            document.getElementById("spinner").style = "display:none";
        }
    }
}


function llamadaAsincrona2(url, tipo, datos, tipoRespuesta, funcionCallback) {
    miXHR = new objetoXHR();
    if (miXHR) {
        document.getElementById("spinner").style = "display:block";

        miXHR.open(tipo, url, false);

        miXHR.onreadystatechange = ejecutarFuncionAjax(tipoRespuesta, funcionCallback);


        miXHR.send(datos);
    }
}