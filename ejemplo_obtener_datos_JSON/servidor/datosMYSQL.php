<?php
sleep(2);
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "peliculas";

// Creamos la conexion
$conexion = new mysqli($servidor, $usuario, $password,$baseDatos);
$conexion->set_charset("utf8");
$sql = "SELECT nombre,genero,direccion,duracion FROM peliculas";
$resultado = $conexion->query($sql);
$peliculas = array();
if ($resultado->num_rows > 0) {
    while($pelicula = $resultado->fetch_assoc()) {
        $peliculas[] = $pelicula;
    }
}
echo json_encode($peliculas);