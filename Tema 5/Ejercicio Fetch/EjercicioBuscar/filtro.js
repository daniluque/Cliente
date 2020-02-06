
function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}

function filtrar() {

    let input = $("#id").val();
    $.ajax({
        url: "conexion.php",
        data: { id: input },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
    })
        .done(escribirResultado)
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function escribirResultado(respuesta) {
    let divResultado = document.getElementById("resultado");
    divResultado.innerHTML = "";
    var resultados = respuesta;
    let salida = "<table border='1'><tr><th>ID</th><th>MARCA</th><th>MODELO</th><th>PRECIO</th></tr>";

    for (let i = 0; i < resultados.length; i++) {
        let objeto = resultados[i];
        salida += "<tr><td>" + objeto.id + "</td><td>" +
            objeto.marca + "</td><td>" + objeto.modelo + "</td><td>" +
            objeto.precio + "</td></tr>";
    }

    salida += "</table>";

    divResultado.innerHTML = salida;
}