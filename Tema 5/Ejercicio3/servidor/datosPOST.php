<?php
    // retrasamos 2 segundos la ejecución de esta página PHP.
    sleep(2);
    // Mostramos la fecha y hora del servidor web.
    echo "SE HA HECHO LA PETICION CORRECTAMENTE: ".date("j/n/Y G:i:s.")." PARA EL USUARIO: ".$_POST["num1"]." X ".$_POST["num2"]." = ".($_POST["num1"]*$_POST["num2"]);
?>