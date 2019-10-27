// EJERCICIOS CON LOS OPERANDOS
// LAS LÍNEAS DE RETURN NUNCA DEBEN CAMBIARSE.
// DEBE TOCARSE EL CÓDIGO ANTES DEL RETURN PARA QUE LA FUNCIÓN DEVUELVA TRUE


function concatenarCadenas(){

    let clase = 0;
    let x = "ALUMNO_DAW_201";
    let y = "7";
    let resultado = x+y;
    return resultado === "ALUMNO_DAW_2017";
}

function operadorTernario(){

    let x = 3;
    let y = 0;
    
    let resultado = (x>y) ? true:false;

    return resultado;

}

function deleteArray(){

    let array = [1,2,3,4,5,6,7,8,9,10];

    delete array[9];

    return array[9] === undefined;

}

function crearArray(){
    var objeto = new Object();
    var fecha = new Date();

    let x = [1.5,"ALUMNOS",fecha,30,objeto,undefined,null];

    return  x[0] ===  1.5
        && x[1] ===  "ALUMNOS"
        && x[2] instanceof Date
        && typeof x[3] === "number"
        && typeof x[4] === "object"
        && x[5] === undefined
        && x[6] === null;

}

function existeElemento(){
    //Prototipo
    let x = {prueba1:"dato1",prueba2:"dato2"};

    return "prueba1" in x && "prueba2" in x;

}