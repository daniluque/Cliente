<?php
sleep(2);
function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estara vacio";
    }
    return $errores;
}

function validarId($id){
    $errores = array();
    if($id === "") {
    $errores[] = "El id no puede estara vacio";
    }
    return $errores;
}
