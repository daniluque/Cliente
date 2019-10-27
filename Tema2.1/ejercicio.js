//PARA INCLUIR COMENTARIOS
/*
*  PARA INCLUIR VARIAS LINEAS DE COMENTARIOS
*
* */


//ESTE SCRITP ES PARA PRACTICAR LAS DECLARACIONES DE VARIABLES

///esta funcion hay que corregirla para poder porbar las demas
function corregirDeclaraciones(){
    var funcion = new Object();
    var ejemplo = "EJEMPLO";
    var prueba = 123;
    var prueba_ejemplo = "EJERCICIO";
    var prueba = "PRUEBA";
    var prueba = "PRUEBA";

    return true;
}

function declararNumeros(){
    let numA = 13;
    let numB = 12;
    return typeof numA === "number"
       && typeof numB === "number"
       && numA > numB;
}

function declararString(){
    let cadena = "PRuEbA";
    return cadena === "PRuEbA"
        && typeof cadena === "string";
}

function noDefinido(){

    var x = null;
    var y = undefined;
    return x == undefined
        && y == null;
}

function declararSymbol(){
    let x = Symbol("foo");
    return typeof x === "symbol";
}

function declararFecha(){
    let hoy = new Date();
    console.log("Ejecutando");
    return hoy instanceof Date;

}

function declararExpresionRegular(){
    let expresion = new RegExp("Texto");
    //Forma rapida de algunos objetos
    //let expresion = /texto/
    return expresion instanceof RegExp;
}

function declararFuncion(){
    let funcion = new Function();
    funcion = declararFecha;
    funcion();
    return funcion instanceof Function;
}

function declararObjeto(){

    class ObjetoPrueba{};
    let objeto = new ObjetoPrueba;
    return objeto instanceof ObjetoPrueba;
}

function declararArray(){

    let lista = [];
    lista[4] = "Correcto";
    //lista.push("1"); Para añadir elemento
    return lista instanceof Array
            && lista.length === 5
            && lista[4] === "Correcto";

}


function declararArrayTipo(){

    let listaEnteros = new Int32Array([0,0,0,0,0,0,0,0,0,0]);
    return listaEnteros instanceof Int32Array
            && listaEnteros.length === 10;

}


function declararVariableGlobal(){
    
    window.x = "SOY gLOBAL";
    return window.x
            && x === "SOY gLOBAL"
        ;

}

function declararPrototipo(){
    function prototipo(nombre) {
        this.nombre = nombre;
    }
    var objeto = new prototipo("ejemplo");


    return objeto.__proto__ === prototipo.prototype

}

function declaracionConRetraso(){

    var y = 35;
    var resultado = y === 35;


    return resultado;
}


function declaracionLet(){
    let y = "bien";
    let x = 0;
    if(x > 1){
        y = "bien";
    }
    return y === "bien";
}

function declaracionConst(){
    const valor = 30;
    return valor === 30;
}