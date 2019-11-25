document.addEventListener("DOMContentLoaded", function(event) {
    let mostrar = document.getElementById("boton");
    mostrar.addEventListener("click", escribir);


});

function escribir(event) {
    let boton = document.getElementById("boton");
    let input = document.getElementById("pass");
    if (input.type === "password") {
        boton.innerHTML = "Ocultar";
        input.type = "text";
    } else {
        boton.innerHTML = "Mostrar";
        input.type = "password"
    }
}