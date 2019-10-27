
//Esta funcion devuelve una frase nueva que contenga
//Todas las palabras de la frase pasada por parámetro
//que contenga el trozo de palabra. 
//Pero no valdrán aquellas que tengan el trozo de la palabra
//Al principio o al final.

//Por ejemplo: obtenerNuevaFrase("Espero ir al cine a ver el joker","e") => "ver joker";
//Por ejemplo: obtenerNuevaFrase("Todo depende de si el raton si acaba pronto con el queso","to") => "raton";
function obtenerNuevaFrase(frase, trozoPalabra) {


}

//Función que devuelve la suma de todas las posiciones
//En la que se encuentra una palabra en una frase.
//Por ejemplo: sumaDePosiciones("Prueba de la rueda","ue") => 16
//Por ejemplo: sumaDePosiciones("Aclaremos el ejercicio","acl") => 0
function sumaDePosiciones(frase, trozoPalabra) {
    let fraseCom = frase.split(" ");
    let suma = 0;
    let sumaTotal = 0;
    for (let i = 0; fraseCom.length > i; i++) {
        if (fraseCom[i].includes(trozoPalabra)) {
            suma = frase.indexOf(trozoPalabra, suma + 1);
            if (suma === -1) {
                suma = 0;
            }
            sumaTotal = sumaTotal + suma;

        }
    }
    return sumaTotal;
}

//Función que valida el formato RGB de los colores
//Formato RGB solo acepta letras de la A-F y a-f, 
//y numeros de 0 a 9, además de empezar por #.
//Los ejemplos de colores RGB son:
//     #123ABC o #123abc
//     #BBB    o #333     
function esValidoFormatoRGB(color) {
    colorMinusculo = color.toLocaleLowerCase();
    let result = false;
    let coloresHexa = ["a", "b", "c", "d", "e", "f", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let cont = 0;
    if (color.startsWith("#")) {
        for (let j = 1; color.length > j; j++) {
            let comparar = colorMinusculo.charAt(j);
            for (let i = 0; coloresHexa.length > i; i++) {
                if (comparar.includes(coloresHexa[i]) === true) {
                    cont++;
                }
            }
        }
    }
    if (cont === color.length - 1) {
        result = true;
    }
    if (colorMinusculo.endsWith("#")) {
        result = false;
    }
    return result;
}

//Función que valida una URL de una web .com y .es
//con más de un parámetro GET en la url.
//Las urls deben empezar por http://www. o https://www.
//Recordad que el primer parámetro por GET se indica con "?""
//Recordad que el segundo y posteriores parámetros por GET se indica con "&"
//Por ejemplo: http://www.prueba.es?ejemplo=1&prueba=2 => valido
//Por ejemplo: http://www.prueba.es?ejemplo=1 =>no valido
//Por ejemplo: http://www.prueba.es => No valido
//Por ejemplo: https://www.prueba?hola=1&holita=2&holar=3 =>No valido
function esValidaURL(color) {
    resul = false;
    urlSeparada = url.split(".");
    if (urlSeparada.length > 2) {

        if (url.startsWith("http://www.") || url.startsWith("https://www.")) {
            if (urlSeparada[2].startsWith("com") || urlSeparada[2].startsWith("es")) {

                if (urlSeparada[2].includes("&") === true) {

                    resul = true;

                }
            }
        }
    }
    return resul;
}
