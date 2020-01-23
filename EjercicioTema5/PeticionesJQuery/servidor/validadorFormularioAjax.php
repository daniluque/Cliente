<?php
require_once "./funcionesValidacion.php";

$errores = array();
$errores["nombre"] = array();
$errores["apellido"] = array();
$errores["edad"] = array();
$errores["profesion"] = array();
$errores["terminos"] = array();

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["apellido"])){
    $errores["apellido"] = validarApellido(trim($_POST["apellido"]));
}

if(isset($_POST["edad"])){
    $errores["edad"] = validarApellido(trim($_POST["edad"]));
}

if(isset($_POST["profesion"])){
    $errores["profesion"] = validarApellido(trim($_POST["profesion"]));
}

if(isset($_POST["terminos"])){
    $errores["terminos"] = validarApellido(trim($_POST["terminos"]));
}


echo json_encode($errores);