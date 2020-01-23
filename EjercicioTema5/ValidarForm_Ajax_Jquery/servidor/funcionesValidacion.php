<?php

function validarnum1($num1){
    $errores = array();
    if(is_numeric($num1)==false) {
    $errores[] = "No has introducido un número";
    }
    return $errores;
}

function validarnum2($num2){
    $errores = array();
    if(is_numeric($num2)==false) {
    $errores[] = "No has introducido un número";
    }
    return $errores;
}