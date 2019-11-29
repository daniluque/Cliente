$(function() {
    $("#nombre").keyup(validarNombre);
    $("#tiempo").keyup(validarTiempo);
    $("#select").;
    // $("#enviar").submit();
});

function validarNombre() {
    let nombreValido = true;
    $("#erroresNombre").empty();
    let inputNombre = $("#nombre").val();
    let expresion = /^[A-Z]{3,}[0-9]{1,}$/;
    $("#nombre").removeClass("error");
    $("#nombre").removeClass("acierto");
    if (expresion.test(inputNombre)) {
        $("#nombre").addClass("acierto");
    } else {
        nombreValido = false;
        $("#nombre").addClass("error");
        let spanError = $("<span>HAY ERROREN EN EL NOMBRE</span>");
        $("#erroresNombre").append(spanError);
    }
    return nombreValido;
}

function validarTiempo() {
    let tiempoValido = true;
    $("#erroresTiempo").empty();
    let inputTiempo = $("#tiempo").val();
    let expresion = /^[0-9]+$/;
    $("#tiempo").removeClass("error");
    $("#tiempo").removeClass("acierto");
    if (expresion.test(inputTiempo) && inputTiempo > 2) {
        $("#tiempo").addClass("acierto");
    } else {
        tiempoValido = false;
        $("#tiempo").addClass("error");
        let spanError = $("<span>HAY ERROREN EN EL TIEMPO</span>");
        $("#erroresTiempo").append(spanError);
    }
    return tiempoValido;
}

function validarFormularioCompleto() {}