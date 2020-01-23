
<?php

function validarNumero1($numero1){
    $errores = array();
    if($numero1 !== "") {

        if (strlen($numero1) < 4) {
            $errores[] = "El nombre debe tener al menos 4 caracteres";
        }
        if (!preg_match("/^[A-Za-z]*$/",$numero1)) {
            $errores[] = "EL nombre sólo puede contener letras";
        }
    }else{
        $errores[] = "EL nombre esta no puede estar vacío";
    }
    return $errores;
}

function validarNumero2($numero2){
    $errores = array();
    if ($edad < 18) {
        $errores[] = "Debe ser mayor o igual a 18 años";
    }
    return $errores;
}