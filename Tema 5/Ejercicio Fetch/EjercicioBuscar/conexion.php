<?php        
header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate'); 

$id=$_POST["id"];

$conn = mysqli_connect( 'localhost', 'root', '', 'cachimbas');
$sql =  "SELECT `id`, `marca`, `modelo`, `precio` FROM `cachimbas` WHERE id=$id";
$cachimbas=array();
$result=mysqli_query($conn,$sql);
while($row=mysqli_fetch_array($result,MYSQLI_ASSOC)){
    $cachimbas[]=$row;
}

echo json_encode($cachimbas);
?>