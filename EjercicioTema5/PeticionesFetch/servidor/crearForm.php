<?php

header('Content-Type: application/json');
header('Cache-Control: no-cache, must-revalidate');

if ($_POST["select"]==="1") {
    echo "<Input type=text>";
}elseif ($_POST["select"]==="2") {
    echo "input checkbox";
}else {
    echo "select";
}