<?php
require_once "./funcionesValidacion.php";

$errores = array();

$errores["nombre"] = array();




if(isset($_POST["nombre"])){
    $errores["nombre"] = validarNombre(trim($_POST["nombre"]),trim($_POST["nombre"]));
    
}




echo json_encode($errores,JSON_FORCE_OBJECT);