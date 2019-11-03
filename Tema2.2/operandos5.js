function excepcion() {
    try {
        mostrarAlerta("Welcome");
    }
    catch (err) {
        console.log(`${err.name} : ${err.message}`)
    }
}

function crearObjeto() {
    let y = {};
    y.name = "daniel";
    y.apellido = "luque";
    console.log(y);
    y['apellido'] = "castro";
    console.log(y);
    let propiedad = "name";
    y[propiedad] = "Danielito"
    console.log(y);
}

function listaNumero(listaDeNumeros) {
    return function (y) {
        let suma = 0;
        for (let i = 0; i < listaDeNumeros.length; i++) {
            if (listaDeNumeros[i] % 2 == 0) {
                suma += listaDeNumeros[i];
            }
        }
        return suma;
    }
}
let numero = listaNumero([1, 2, 3, 4]);
console.log(numero(2));

//let funcionFlecha = valor => valor + 1;
let funcionFlecha = (nombre, edad) => alert(nombre + " " + edad);
setTimeout(
    function () {
        funcionFlecha("daniel", 23)
    }, 3000)