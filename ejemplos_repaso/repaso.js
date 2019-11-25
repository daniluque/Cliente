let animal1 = { nombre: "Thor", especie: "Perro", raza: "caniche", vida: 5 };
let animal2 = { nombre: "Capitan America", especie: "Gato", raza: "siames", vida: 8 };
let animal3 = { nombre: "Viuda Negra", especie: "Perro", raza: "bulldog", vida: 15 };
let animal4 = { nombre: "Hulk", especie: "Perro", raza: "pastor aleman", vida: 12 };
let animal5 = { nombre: "Ojo de Halcon", especie: "Perro", raza: "san bernardo", vida: 9 };
let animal6 = { nombre: "Loky", especie: "Perro", raza: "salchicha", vida: 4 };
let animal7 = { nombre: "Iron Man", especie: "Conejo", raza: "pascuas", vida: 9 };
let animal8 = { nombre: "WarMachine", especie: "Perro", raza: "raton de praga", vida: 20 };
let animal9 = { nombre: "Vision", especie: "Perro", raza: "pastor belga", vida: 12 };
let animal10 = { nombre: "Mercurio", especie: "Pajaro", raza: "loro", vida: 15 };

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];
//Siempre añadir el evento dentro de esta funcion
document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("mostrarAnimales");
    boton.addEventListener("click", mostrarAnimales);
    //Llamamos a el segundo evento
    let anadir = document.getElementById("esp");
    anadir.addEventListener("change", mostrarAnimalesEspecie);

    let boton1 = document.getElementById("botonOrdenDescendente");
    boton1.addEventListener("click", mostrarAnimalesDescendente);

    /*let boton2 = document.getElementById("anadirAnimal");
    boton2.addEventListener("click", anadirAnimales);*/
    let inputNombre = document.getElementById("nombre");
    inputNombre.addEventListener("keyup", validarNombre);

    let inputVida = document.getElementById("vida");
    inputVida.addEventListener("keyup", validarVida);
})

function mostrarAnimales() {
    /*
    let divListadoAnimales = document.getElementById("listadoAnimales");
    divListadoAnimales.innerHTML = ""; //Borramos el contenido para que no se repita
    let ulAnimales = document.createElement("ul");

    for (const animal of listadoAnimales) {
        let liAnimales = document.createElement("li");
        liAnimales.innerHTML = animal.nombre;
        ulAnimales.appendChild(liAnimales);
    }
    divListadoAnimales.appendChild(ulAnimales);
    */
    MostrarAnimalesRefactorizada("listadoAnimales", listadoAnimales)
}

function MostrarAnimalesRefactorizada(idDivMostrar, lista) {
    let divListadoAnimales = document.getElementById(idDivMostrar);
    divListadoAnimales.innerHTML = ""; //Borramos el contenido para que no se repita
    let ulAnimales = document.createElement("ul");

    for (const animal of lista) {
        let liAnimales = document.createElement("li");
        liAnimales.innerHTML = animal.nombre;
        ulAnimales.appendChild(liAnimales);
    }
    divListadoAnimales.appendChild(ulAnimales);
}

function mostrarAnimalesEspecie() {
    let opcion = document.getElementById("esp");
    let especieSeleccionada = opcion.value;
    let especieFiltrada = fintrarEspecie(especieSeleccionada);
    MostrarAnimalesRefactorizada("animalesEspecie", especieFiltrada);

}

function fintrarEspecie(especie) {
    return listadoAnimales.filter(x => x.especie.toLocaleLowerCase() === especie.toLocaleLowerCase());
}

function mostrarAnimalesDescendente() {
    listadoAnimales.sort((x, y) => -x.nombre.localeCompare(y.nombre));
    MostrarAnimalesRefactorizada("listadoAnimalesOrdenados", listadoAnimales);
}

function anadirAnimales() {


}

function validarNombre() {
    let esCorrecto = true;
    let inputNombre = document.getElementById("nombre");
    let valor = inputNombre.value.trim();
    let errores = document.getElementById("erroresNombre");
    errores.innerHTML = "";
    inputNombre.classList.remove("inputCorrecto");
    inputNombre.classList.remove("inputErroneo");

    if (!/^[a-zA-Z]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO LETRAS";
        errores.appendChild(divError);
    }
    if (!/^[A-Z]+$/.test(valor)) {
        esCorrecto = false;
        let divError = document.createElement("div");
        divError.innerHTML = "SOLO LETRAS MAYUSCULAS";
        errores.appendChild(divError);
    }
    if (esCorrecto) {
        inputNombre.classList.add("inputCorrecto");
    } else {
        inputNombre.classList.add("inputErroneo");
    }
}

function validarVida() {
    let esCorrecto = true;
    let inputVida = document.getElementById("vida");
    let valor = inputVida.value.trim();
    let errores = document.getElementById("erroresVida");
    inputVida.classList.remove("inputCorrecto");
    inputVida.classList.remove("inputErroneo");

    if (valor < 10) {
        esCorrecto = false;
    }
    if (!/^([0-9])*$/) {
        esCorrecto = false;
    }
    if (esCorrecto) {
        inputVida.classList.add("inputCorrecto");
    } else {
        inputVida.classList.add("inputErroneo");
    }
}