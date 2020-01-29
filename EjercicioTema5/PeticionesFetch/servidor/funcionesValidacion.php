<?php
sleep(2);
function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estara vacio";
    }
    return $errores;
}

