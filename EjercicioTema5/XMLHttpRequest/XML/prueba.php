<?php

header('Content-Type: text/xml');
header('Cache-Control: no-cache, must-revalidate');

$conn = mysqli_connect( 'localhost', 'root', '', 'tienda_cachimbas');
$sql = "SELECT id,marca,modelo,precio FROM cachimba";
$result = mysqli_query($conn, $sql);

echo '<?xml version="1.0" encoding="utf-8"?>
<tienda>';
while($resultado = mysqli_fetch_array($result))
 {
    echo "<cachimba>";
    echo "<marca>" . $resultado['marca'] . "</marca>";
    echo "<modelo>" . $resultado['modelo'] . "</modelo>";
    echo "<id>" . $resultado['id'] . "</id>";
    echo "<precio>" . $resultado['precio'] . "</precio>";
    echo "</cachimba>";
 }
echo "</tienda>";
