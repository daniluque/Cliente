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



function validarnum1() {
    let inputnum1 = $("#num1");
    incluirSpinner(inputnum1);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionnum1;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("num1=" + inputnum1.val());
}

function validarnum2() {
    let inputnum2 = $("#num2");
    incluirSpinner(inputnum2);
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionnum2;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("num2=" + inputnum2.val());
}

function validarFormulario() {
    event.preventDefault();
    validacionFormularioAjax();
}

function validacionFormularioAjax() {
    $("#modal").modal("show");
    let inputnum1 = $("#num1");
    let inputnum2 = $("#num2");
    let miXHR = objetoXHR();
    miXHR.open("POST", "./servidor/validadorFormularioAjax.php");
    miXHR.onreadystatechange = comprobarEstadoPeticionFormulario;
    miXHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    miXHR.send("num1=" + inputnum1.val() + "&" + "num2=" + inputnum2.val());
}


function comprobarEstadoPeticionnum1() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputnum1 = $("#num1");
        gestionarErrores(inputnum1, errores.num1);
    }
}

function comprobarEstadoPeticionnum2() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let input = $("#num2");
        gestionarErrores(input, errores.num2);
    }
}

function comprobarEstadoPeticionFormulario() {
    if (this.readyState == 4 && this.status == 200) {
        let errores = JSON.parse(this.responseText);
        let inputnum1 = $("#num1");
        let inputnum2 = $("#num2");
        let hayErroresnum1 = gestionarErrores(inputnum1, errores.num1);
        let hayErroresnum2 = gestionarErrores(inputnum2, errores.num2);
        if (!hayErroresnum1 && !hayErroresnum2) {
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
