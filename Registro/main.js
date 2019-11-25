let listadoUsuarios = [];

document.addEventListener("DOMContentLoaded", function() {

    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", validarNombre);

    let inputApellidos = document.getElementById("apellidos");
    inputApellidos.addEventListener("keyup", validarApellidos);

    let inputEdad = document.getElementById("edad");
    inputEdad.addEventListener("keyup", validarEdad);

    let inputProfesion = document.getElementById("profesion");
    inputProfesion.addEventListener("click", validarProfesion);

    let inputPolitica = document.getElementById("politica");
    inputPolitica.addEventListener("click", validarPolitica);

    let formulario = document.getElementById("formularioCrearUsuario");
    formulario.addEventListener("submit", validarFormulario);

})

function validarNombre() {
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresNombre");
    listaErrores.innerHTML = "";
    inputNombre.classList.remove("inputErroneo");
    inputNombre.classList.remove("inputCorrecto");

    //Comprobamos que usa solo letras y espacio
    if (!/^[a-zA-Z ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS";
        listaErrores.appendChild(divError);
    }

    if (valor.length <= 3) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE TENER UN MÍNIMO DE 3 LETRAS";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputNombre.classList.add("inputCorrecto");
    } else {
        inputNombre.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarApellidos() {
    let esCorrecto = true;
    let inputApellidos = document.getElementById("apellidos");
    let inputNombre = document.getElementById("nombre");
    let valor = inputApellidos.value.trim();
    let valor2 = inputNombre.value.trim();
    let listaErrores = document.getElementById("erroresApellidos");
    listaErrores.innerHTML = "";
    inputApellidos.classList.remove("inputErroneo");
    inputApellidos.classList.remove("inputCorrecto");

    //Comprobamos que usa solo letras y espacio
    if (!/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE LETRAS";
        listaErrores.appendChild(divError);
    }

    if (valor.length <= 3) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE TENER UN MÍNIMO DE 3 LETRAS";
        listaErrores.appendChild(divError);

    }
    if (valor === valor2) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "NO PUEDE SER IGUAL EL NOMBRE AL APELLIDO";
        listaErrores.appendChild(divError);
    }

    if (esCorrecto) {
        inputApellidos.classList.add("inputCorrecto");
    } else {
        inputApellidos.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarEdad() {
    let esCorrecto = true;
    let inputEdad = document.getElementById("edad");
    let valor = inputEdad.value.trim();
    let listaErrores = document.getElementById("erroresEdad");
    listaErrores.innerHTML = "";
    inputEdad.classList.remove("inputErroneo");
    inputEdad.classList.remove("inputCorrecto");

    //Comprobamos que usa solo letras y espacio
    if (!/^[0-9]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO DEBEN USARSE NÚMEROS";
        listaErrores.appendChild(divError);
    }

    if (valor < 18) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "DEBE SER MAYOR QUE 18";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputEdad.classList.add("inputCorrecto");
    } else {
        inputEdad.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarProfesion() {
    let esCorrecto = true;
    let inputProfesion = document.getElementById("profesion");
    let valor = inputProfesion.value;
    let listaErrores = document.getElementById("erroresProfesion");
    listaErrores.innerHTML = "";
    inputProfesion.classList.remove("inputErroneo");
    inputProfesion.classList.remove("inputCorrecto");

    if (valor === "ninguna") {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "NO PUEDE SER NINGUNA";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputProfesion.classList.add("inputCorrecto");
    } else {
        inputProfesion.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarPolitica() {
    let esCorrecto = true;
    let inputPolitica = document.getElementById("politica");
    let valor = inputPolitica.value;
    let listaErrores = document.getElementById("erroresPolitica");
    listaErrores.innerHTML = "";
    inputPolitica.classList.remove("inputErroneo");
    inputPolitica.classList.remove("inputCorrecto");

    if (!inputPolitica.checked) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "TIENE QUE ESTAR SELECCIONADO";
        listaErrores.appendChild(divError);

    }

    if (esCorrecto) {
        inputPolitica.classList.add("inputCorrecto");
    } else {
        inputPolitica.classList.add("inputErroneo");
    }
    return esCorrecto;
}

function validarFormulario(event) {
    event.preventDefault();
    let esFormularioCorrecto = false;
    let esCorrectoNombre = validarNombre();
    let esCorrectoApellidos = validarApellidos();
    let esCorrectoEdad = validarEdad();
    let esCorrectoProfesion = validarProfesion();
    let esCorrectoPolitica = validarPolitica();
    if (esCorrectoEdad &&
        esCorrectoNombre &&
        esCorrectoApellidos && esCorrectoProfesion && esCorrectoPolitica) {
        esFormularioCorrecto = true;
    }

    if (esFormularioCorrecto) {
        let formulario = event.target;
        //formulario.submit();

        //Crear un objeto animal y añadirlo a la lista de animales
        let usuario = {};
        let nombre = document.getElementById("nombre").value.trim();
        let apellidos = document.getElementById("apellidos").value.trim();
        let edad = document.getElementById("edad").value.trim();
        let profesion = document.getElementById("profesion").value;
        let politica = document.getElementById("politica").value;
        usuario.nombre = nombre;
        usuario.apellidos = apellidos;
        usuario.edad = edad;
        usuario.profesion = profesion;
        usuario.politica = politica;
        listadoUsuarios.push(usuario);
        alert("SE HA CREADO EL USUARIO");
        formulario.reset();

        let divNombre = document.getElementById("nombreUsuario");
        divNombre.innerHTML = usuario.nombre;

        let divApellidos = document.getElementById("apellidosUsuario");
        divApellidos.innerHTML = usuario.apellidos;

        let divEdad = document.getElementById("edadUsuario");
        divEdad.innerHTML = usuario.edad;

        let divProfesion = document.getElementById("profesionUsuario");
        divProfesion.innerHTML = usuario.profesion;

        let divPolitica = document.getElementById("politicaUsuario");
        divPolitica.innerHTML = usuario.politica;


    } else {
        alert("HAY ERRORES EN EL FORMULARIO");
    }

}