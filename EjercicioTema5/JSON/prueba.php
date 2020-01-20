<?php        
header('Content-Type: application/json;  charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');

$servidor = "localhost";
$usuario = "root";
$password = "";
$baseDatos = "tienda_cachimbas";

$id=$_POST["id"]; 
$precio=$_POST["precio"];
$marca=$_POST["marca"];
$modelo=$_POST["modelo"];

$conn = new PDO("mysql:host=$servidor;dbname=$baseDatos", $usuario, $password);
$conn->exec("set names utf8");
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT id,marca,modelo,precio From cachimba Where marca='$marca' AND precio $precio 10 AND modelo='$modelo' and id=$id");
$stmt->execute();
$cachimbas = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($cachimbas);
?>
