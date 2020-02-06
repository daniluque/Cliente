<?php

function validarNombre($nombre){
    $errores = array();
    if($nombre === "") {
    $errores[] = "El nombre no puede estara vacio";

    }else{
        if (!preg_match("/[A-ZÑ ]{5,}$/",$nombre)) {
            $errores[] = "El nombre debe de tener 5 letras o mas y solo letras MAYUSCULAS";
        }
    }
    return $errores;
}

function validarApellido($apellido,$nombre){
    $errores = array();
    if($apellido === "") {
    $errores[] = "El apellido esta vacio";
    }else{
        if ($apellido === $nombre) {
            $errores[] = "El apellido es igual que el nombre";
        }
    }
    return $errores;
}

function validarEdad($edad){
    $errores = array();
    if($edad === "") {
    $errores[] = "La edad esta vacio";
    }else{
        if ($edad < 21) {
            $errores[] = "La edad minima es 21 años";
        }
    }
    return $errores;
}

function validarProfesion($profesion){
    $errores = array();
    if($profesion === "") {
    $errores[] = "La PROFESION esta vacio";
    }
    return $errores;
}

function validarTerminos($terminos){
    $errores = array();
    if($terminos !== "on") {
    $errores[] = "Acepte los terminos";
    }
    return $errores;
}