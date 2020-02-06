function objetoXHR() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        var versionesIE = new Array('MsXML2.XMLHTTP.5.0', 'MsXML2.XMLHTTP.4.0',
            'MsXML2.XMLHTTP.3.0', 'MsXML2.XMLHTTP', 'Microsoft.XMLHTTP');
        for (var i = 0; i < versionesIE.length; i++) {
            try {
                return new ActiveXObject(versionesIE[i]);
            } catch (errorControlado) { }
        }
    }
    throw new Error("No se pudo crear el objeto XMLHTTPRequest");
}

function validarNombre() {
    let nombreInput = $("#nombre").val();
    let input = $("#nombre");

    $.ajax({
        url: "./servidor/validadorFormularioAjax.php",
        data: { nombre: nombreInput },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(input, text.nombre);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#error").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}



function validarApellido() {
    let inputapellido = $("#apellido").val();
    let inputnombre = $("#nombre").val();
    let Input = $("#apellido");
    $.ajax({
        url: "./servidor/validadorFormularioAjax.php",
        data: { apellido: inputapellido, nombre: inputnombre },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.apellido);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarEdad() {
    let inputedad = $("#edad").val();
    let Input = $("#edad");
    $.ajax({
        url: "./servidor/validadorFormularioAjax.php",
        data: { edad: inputedad },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.edad);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}

function validarProfesion() {

    let inputprofesion = $("#profesion").val();
    let Input = $("#profesion");
    $.ajax({
        url: "./servidor/validadorFormularioAjax.php",
        data: { profesion: inputprofesion },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.profesion);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });

}

function validarTerminos() {
    let inputterminos = $("#terminos:checked").val();
    let Input = $("#terminos")
    $.ajax({
        url: "./servidor/validadorFormularioAjax.php",
        data: { terminos: inputterminos },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(Input, text.terminos);
        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
            $("#spinner").css("display", "none");
        });
}
/* VALIDACION DEL FORMULARIO COMPLETO */

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    let inputnombre = $("#nombre");
    let inputapellido = $("#apellido");
    let inputedad = $("#edad");
    let inputprofesion = $("#profesion");
    let inputterminos = $("#terminos:checked");
    $.ajax({
        url: "./servidor/validadorFormularioAjax.php",
        data: { nombre: inputnombre.val(), apellido: inputapellido.val(), edad: inputedad.val(), profesion: inputprofesion.val(), terminos: inputterminos.val() },
        method: "POST",
        dataType: "JSON",
        beforeSend: function () { $("#spinner").css("display", "block"); },
        success: function (text) {
            gestionarErrores(inputnombre, text.nombre);
            gestionarErrores(inputapellido, text.apellido);

            gestionarErrores(inputedad, text.edad);
            gestionarErrores(inputprofesion, text.profesion);

            gestionarErrores(inputterminos, text.terminos);

            if (gestionarErrores(inputnombre, text.nombre) === false && gestionarErrores(inputapellido, text.apellido) === false &&
                gestionarErrores(inputedad, text.edad) === false && gestionarErrores(inputprofesion, text.profesion) === false &&
                gestionarErrores(inputterminos, text.terminos) === false) {
                $.ajax({
                    url: "./servidor/insertarDatos.php",
                    data: { nombre: inputnombre.val(), apellido: inputapellido.val(), edad: inputedad.val(), profesion: inputprofesion.val(), terminos: inputterminos.val() },
                    method: "POST",
                    dataType: "JSON",
                });
                $("#resultado").html("Se ha creado correctamente");
            }

        }
    })
        .fail(function () {
            alert("ERROR EN LA PETICION");
            $("#resultado").html("SE HA PRODUCIDO UN ERROR EN LA PETICIÓN");
        })
        .always(function () {
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

function incluirSpinner(input) {
    if (input.parent().next().length === 0) {
        let spin = $(".spinner").first().clone(true);
        input.parent().after(spin);
        spin.show();
    }
}