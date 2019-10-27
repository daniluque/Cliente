function contarVocales(elemetos) {
    let cont = 0;
    for (let x = 0; x < elemetos.length; x++) {
        if (elemetos[x] === "a" || elemetos[x] === "e" || elemetos[x] === "i" || elemetos[x] === "o" || elemetos[x] === "u" ||
            elemetos[x] === "A" || elemetos[x] === "E" || elemetos[x] === "I" || elemetos[x] === "O" || elemetos[x] === "U") {
            cont = cont + 1;
        }
    }
    return cont;
}

function contarVocaleDos(lista) {
    let cont = 0;
    for (let letra of lista) {
        console.log(letra);
        switch (letra.toUpperCase()) {
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':
            case 'Á':
            case 'É':
            case 'Í':
            case 'Ó':
            case 'Ú':
            case 'Ü':
                cont = cont + 1;
                break;
        }
    }
    return cont;
}
function factorial(num) {
    let sum = 0;
    if (typeof num === 'number') {
        sum = 1;
        for (let x = num; x >= 1; x--) {
            sum = sum * x;
        }
    }
    return sum;
}
function compararLista(lista1, lista2) {
    for (let x = 0; x < lista1.length; x++) {
        if (typeof lista1[x] === 'number' && typeof lista2[x] === 'number') {
            let equipo1 = 0;
            let equipo2 = 0;
            for (let x = 0; x < lista1.length; x++) {
                if (lista1[x] > lista2[x]) {
                    equipo1++;
                } else if (lista1[x] < lista2[x]) {
                    equipo2++;
                }
            }
            if (equipo1 > equipo2) {
                console.log(`Gana la lista 1: ${equipo1}`)
            } else if (equipo1 < equipo2) {
                console.log(`Gana la lista 2: ${equipo2}`)
            } else {
                console.log(`Empata a: ${equipo2} puntos`)

            }
        }
    }
}

compararLista([5, 2, 6, 7, 8], [0, 0, 3, 5, 6]);

function concatenaLista(lista) {
    let text = "";
    let aux = lista.length;
    //Comienza el funcionamiento de lo que se pide
    for (let x = 0; x < lista.length / 2; x++) {
        if (x === (aux - x - 1)) {
            text += lista[x];
        } else {
            text = text + lista[x]
            text = text + lista[aux - x - 1];
        }
    }
    return text;
}
resultado = concatenaLista(['h', 'o', 'l', 'a']);
console.log(resultado);

function validarTelefono(telefono) {
    let val = false;
    if (telefono.length === 9) {
        //if (telefono.substring(0,1)=== '6'||telefono.substring(0,1)=== '7'
        //Esta linea se puede sustituir por la comentada
        if (telefono[0] === '6' || telefono[0] === '7') {
            if (isNaN(telefono) === false) {
                val = true;
            }
        }
    }
    return val;
}
function calcularLetraDni(dni) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J',
        'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let a = parseInt(dni)
    let l = a % 23;
    return letras[l];
}
function validacionDni(dni) {
    let val = false;
    dni = dni.trim();
    if (dni.length === 9) {
        let num = parseInt(dni.substring(0, 8));
        let letra = dni.charAt(8);
        let letraDni = calcularLetraDni(dni);
        if (letra.toLocaleUpperCase() === letraDni) {
            val = true;
        }
    }
    return val;
}

function correoValido(email) {
    let val = false;
    email = email.trim().replace(' ', '');
    let txt = email.split('@');
    if (txt[0].length > 1 && txt[1] >= 3) {
        let txtPunto = txt[1].split('.');
        if (txtPunto[0].length > 1 && txtPunto[1].length > 1) {
            val = true;
        }
    }
    return val;
}
/**Exprexiones regulares**/
function pruebaExpresion(telefono) {
    let expresion = /^([0-9]){9}$/
    let resultado = false;
    if (expresion.test(telefono)) {
        resultado = true;
    }
    return resultado;
}
function pruebaTelefonoEspanol(telefono) {
    let expresion = /^(6|7){1}([0-9]){8}$/
    let resultado = false;
    if (expresion.test(telefono)) {
        resultado = true;
    }
    return resultado;
}
function pruebaTelefonoEspanol34(telefono) {
    let expresion = /^\+34(6|7){1}([0-9]){8}$/
    let resultado = false;
    if (expresion.test(telefono)) {
        resultado = true;
    }
    return resultado;
}
function validarMail(email) {
    let expresion = /^([A-Za-z0-9._-])+[(@)]+([A-Za-z])+([.])+([A-Za-z]+\.?)+([^.])+$/
    let resultado = false;
    if (expresion.test(email)) {
        resultado = true;
    }
    return resultado;
}
function validarUrl(url) {
    let expresion = /^([http://])$/
    let resultado = false;
    if (expresion.test(url)) {
        resultado = true;
    }
    return resultado;
}
function quitarNumeros(texto) {
    return texto.replace(/([0-9])/g, "");
}
function Calculadora(num1, num2) {
    console.log("La suma es: " + (num1 + num2));
    console.log("La resta es: " + num1 - num2);
    console.log("La multiplicacion es: " + num1 * num2);
    console.log("La division es: " + num1 / num2);

}