<?php
require_once "./funcionesValidacion.php";
sleep(3);// No es necesario, solo es para que dure un poco más.
$errores = array();
$errores["num1"] = array();
$errores["num2"] = array();

if(isset($_POST["num1"])){
    $errores["num1"] = validarnum1(trim($_POST["num1"]));
}

if(isset($_POST["num2"])){
    $errores["num2"] = validarnum2(trim($_POST["num2"]));
}


echo json_encode($errores);