<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$nombre=$_POST["nombre"];
$apellido=$_POST["apellido"];
$edad=$_POST["edad"];
$profesion=$_POST["profesion"];

$conn = mysqli_connect( 'localhost', 'root', '', 'cachimbas');
$sql =  "INSERT INTO `usuarios`( `nombre`, `apellido`, `edad`,`profesion`) VALUES ('$nombre','$apellido',$edad,'$profesion')";
$result=mysqli_query($conn,$sql);
?>