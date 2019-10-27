//Ejercicios de cadena
function pruebaCharAt(cadena, posicion) {
    return cadena.charAt(posicion)
}

function pruebaUnicode(cadena, posicion) {
    return cadena.charCodeAt(posicion);
}
function pruebaConcat() {
    let prueba = 'hola'
    let prueba1 = prueba.concat(' soy', ' daniel');
    return prueba1;
}
function pruebaEnds() {
    return 'prueba'.endsWith('b');
}
function devuelveCaracterUnicode(pos) {
    return String.fromCharCode(pos);
}
function incluye() {
    return 'prueba'.includes('ba');
}
function pruebaIndexOff() {
    return 'prueba'.indexOf();
}
//Cambia mayusculas y minusculas 
function intercambiaMayus(cadena) {
    let resultado = '';
    let tamaño = cadena.length;
    for (let i = 0; i < tamaño; i++) {
        let char = cadena.charAt(i);
        if (char.localeCompare(char.toLocaleUpperCase()) === 0) {
            resultado += char.toLocaleLowerCase();
        } else {
            resultado += char.toLocaleUpperCase();
        }
    }
    return resultado;
}

function invertirUnaPalabra(String) {
    let x = String.length - 1;
    let txt = '';
    while (x >= 0) {
        txt += String.charAt(x);
        x--;
    }
    return txt;
}
function insertarCadena(cadenaIncluir, pos) {
    if (pos === undefined) {
        pos = 0;
    } else {
        cadena = 'Mi Nombre es daniel';
        let result = '';
        result = cadena.slice(0, pos);
        result += cadenaIncluir;
        result += cadena.slice(pos);
    }
    return result;
}
function cogerPalabra(num) {
    let txt = "Quiero terminar ya esta clase";
    let result = '';
    let palabra = txt.split(' ');
    for (let i = 0; i < num; i++) {
        result += palabra[i] + ' ';
    }
    return result.trim();
}
//Coger las palabra de una cadena que el usuario nos indica separadas por un espacio
function cogerPalabras2(cadena, num) {
    return `${cadena.split(' ').splice(0, num).join(' ')}`;
}