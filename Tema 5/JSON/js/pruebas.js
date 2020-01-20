function funcionAjaxAsincronaJSON() {
    llamadaAsincrona2("servidor/datosJSON.php", "GET", null, "JSON", tratarResultadoJSON);
}

function tratarResultadoJSON(respuesta) {
    var resultados = JSON.parse(respuesta)
    let salida = "<table border='1'><tr><th>NOMBRE</th><th>VERSION</th><th>DESCRIPCION</th><th>DISTRIBUCION</th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let objeto = resultados[i];
        salida += "<tr><td>" + objeto.nombre + "</td><td>" +
            objeto.version + "</td><td>" + objeto.descripcion + "</td><td>" +
            objeto.distribucion + "</td></tr>";
    }

    salida += "</table>";

    document.getElementById("resultadoAsincronoJSON").innerHTML = salida;

}