<?php
require_once "./funcionesValidacion.php";

$errores = array();

$errores["nombre"] = array();
$errores["id"] = array();

if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]));
}

if(isset($_POST["id"])){
    $errores["id"] = validarId(trim($_POST["id"]));
}

echo json_encode($errores,JSON_FORCE_OBJECT);