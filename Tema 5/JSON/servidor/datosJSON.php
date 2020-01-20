<?php
// retrasamos 2 segundos la ejecución de esta página PHP.
sleep(2);
// Cabecera para indicar que vamos a enviar datos JSON y que no haga caché de los datos.
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

$conex= mysqli_connect('localhost','root','','distroada');
$sql ="SELECT nombre,version,descripcion,distribucion FROM distros";
$result = mysqli_query($conex,$sql);
$resultado= [];
while($mostrar=mysqli_fetch_array($result)){
    $resultado[] = $mostrar;
}

echo json_encode($resultado);