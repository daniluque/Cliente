<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre !== "") {
    $errores[] = "El nombre no puede estara vacio";
    if (preg_match(/^[0-9]+$/),$nombre) {
        $errores[] = "El nombre debe de tener 5 letras o mas y solo letras";
    }
    }
    return $errores;
}

function validarApellido($apellido){
    $errores = array();
    if($apellido === "") {
    $errores[] = "Nohas introducido nombre";
    }
    return $errores;
}