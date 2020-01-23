<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');     

$precio=$_POST["precio"];
$marca=$_POST["marca"];
$modelo=$_POST["modelo"];

$conn = mysqli_connect( 'localhost', 'root', '', 'tienda_cachimbas');
$sql =  "INSERT INTO `cachimba`( `marca`, `modelo`, `precio`) VALUES ('$marca','$modelo',$precio)";
$result=mysqli_query($conn,$sql);
?>