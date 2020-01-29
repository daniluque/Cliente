function validarNombre() {

    let nombre = $("#nombre").val();
    let Input = $("nombre");
    let form = new FormData();

    form.append("nombre", nombre);
    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/validadorFormularioAjax.php", {
        method: 'post',
        body: form
    })
        .then(function (response) { return response.json() })
        .then(function (response) {
            gestionarErrores(Input, response.nombre)
        })
        .catch(function (err) {
            console.log("Error");
            alert("Se ha producido un errorrrr");
        })
        .finally(function () {
            $("#spinner").css("display", "none");
        });
}

function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (Object.keys(errores).length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let i = 0; Object.keys(errores).length > i; i++) {
            divErrores.append("<div>" + errores[i] + "</div>");
        }
    }
    input.parent().next().remove();
    return hayErrores;
}
