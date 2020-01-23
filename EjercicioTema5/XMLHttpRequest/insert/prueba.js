document.addEventListener("DOMContentLoaded", function() {
    let formularioAjax = document.getElementById("formulario");
    formularioAjax.addEventListener("submit", function(event) {
        event.preventDefault();
        realizarPeticionAsincrona();
    });
})



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

function comprobarEstadoPeticion() {
    switch (this.readyState) {
        case 4:
            if (this.status == 200) {
                let divRespuesta = document.getElementById("respuesta");
                divRespuesta.innerHTML = this.responseText;
                document.getElementById("respuesta").innerHTML = "<p>Se ha creado correctamente</p>";
            } else {}
            break;
    }
}

function realizarPeticionAsincrona() {
    let precio = document.getElementById("precio").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;

    document.getElementById("spinner").style = "display:block";

    miXHR = new objetoXHR();

    miXHR.open("POST", "prueba.php", true);
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.onreadystatechange = comprobarEstadoPeticion;

    let datos = "precio=" + precio + "&marca=" + marca + "&modelo=" + modelo;
    miXHR.send(datos);
    document.getElementById("spinner").style = "display:none";
}