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
    let inputNombre = $("#nombre");
    incluirSpinner(inputNombre);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionNombre;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("nombre=" + inputNombre.val());
}

function validarApellido() {
    let inputApellido = $("#apellido");
    let inputNombre = $("#nombre");
    incluirSpinner(inputApellido);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionApellido;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("apellido=" + inputApellido.val() + "&nombre=" + inputNombre.val());
}

function validarEdad() {
    let inputEdad = $("#edad");
    incluirSpinner(inputEdad);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionEdad;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("edad=" + inputEdad.val());
}

function validarProfesion() {
    let inputProfesion = $("#profesion");
    incluirSpinner(inputProfesion);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionProfesion;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("profesion=" + inputProfesion.val());
}

function validarTerminos() {
    let inputTerminos = $("#terminos:checked");
    incluirSpinner(inputTerminos);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionTerminos;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("terminos=" + inputTerminos.val());
}

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    $("#modal").modal("show");
    let inputNombre = $("#nombre");
    let inputApellido = $("#apellido");
    let inputEdad = $("#edad");
    let inputProfesion = $("#profesion");
    let inputTerminos = $("#terminos:checked");
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionFormulario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("nombre=" + inputNombre.val() + "&apellido=" + inputApellido.val() + "&edad=" + inputEdad.val() + "&profesion=" + inputProfesion.val() + "&terminos=" + inputTerminos.val());
}


function comprobarEstadoPeticionNombre() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputNombre = $("#nombre");
        gestionarErrores(inputNombre, errores.nombre);
    }
}

function comprobarEstadoPeticionApellido() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#apellido");
        gestionarErrores(input, errores.apellido);
    }
}

function comprobarEstadoPeticionEdad() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#edad");
        gestionarErrores(input, errores.edad);
    }
}

function comprobarEstadoPeticionProfesion() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#profesion");
        gestionarErrores(input, errores.profesion);
    }
}

function comprobarEstadoPeticionTerminos() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#terminos");
        gestionarErrores(input, errores.terminos);
    }
}

function comprobarEstadoPeticionFormulario() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputNombre = $("#nombre");
        let inputApellido = $("#apellido");
        let inputEdad = $("#edad");
        let inputProfesion = $("#profesion");
        let inputTerminos = $("#terminos:checked");
        let hayErroresNombre = gestionarErrores(inputNombre, errores.nombre);
        let hayErroresApellido = gestionarErrores(inputApellido, errores.apellido);
        let hayErroresEdad = gestionarErrores(inputEdad, errores.edad);
        let hayErroresProfesion = gestionarErrores(inputProfesion, errores.profesion);
        let hayErroresTerminos = gestionarErrores(inputTerminos, errores.terminos);
        if (!hayErroresNombre && !hayErroresApellido && !hayErroresEdad && !hayErroresProfesion && !hayErroresTerminos) {
            let formulario = $("#formulario");
            formulario.submit();
        }
        $("#modal").modal("hide");
    }
}





function gestionarErrores(input, errores) {
    var hayErrores = false;
    let divErrores = input.next();
    divErrores.html("");
    input.removeClass("bg-success bg-danger");
    if (errores.length === 0) {
        input.addClass("bg-success");
    } else {
        hayErrores = true;
        input.addClass("bg-danger");
        for (let error of errores) {
            divErrores.append("<div>" + error + "</div>");
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
