//Implementar las siguientes funciones para que pasen una serie de pruebas
//Usando solo estructuras de control para ello.
//Devuelves 1 si a es mayor que b
//Devuelves -1 si a es menor que b
//Devuelves 0 si a es igual b

function quienEsMayor(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

//Dado un array de elementos, devuelve la suma de todos aquellos que los elementos sean pares
function sumarElementosPares(elemetos) {
    let num = 0;
    for (let x = 0; x < elemetos.length; x++) {
        if (elemetos[x] % 2 === 0) {
            num = num + elemetos[x];
        }
    }
    return num;
}

//Dado un array de elementos devuelve el valor mas grande de todos ellos.
function escogerValorMasGrande(elemetos) {
    let num = elemetos[0];
    for (let x = 0; x < elemetos.length; x++) {
        if (elemetos[x] > num) {
            num = elemetos[x];
        }
    }
    return num;

}

//Dada una palabra cualquier, devuelve la palabra alreves, por ejemplo: "HOLA" => "ALOH"
function invertirUnaPalabra(String) {
    var x = String.length - 1;
    var txt = '';
    while (x >= 0) {
        txt += String.charAt(x);
        x--;
    }
    return txt;
}

//Dada un array, cuenta el numero de elementos impares que contiene
function contarElementosImpares(String) {
    let num = 0;
    for (let x = 0; x < String.length; x++) {
        if (String[x] % 2 !== 0) {
            num++;
        }
    }
    return num;
}

