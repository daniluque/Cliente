<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Ejemplo Ajax</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" >

    <!-- Incluimos librería Bootstrap css-->
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css"
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy"
          crossorigin="anonymous">


    <!-- Incluimos las librerís JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"
        ></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous">

    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js"
            integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4"
            crossorigin="anonymous">
    </script>
    <script src="js/validacion.js" defer></script>
    <link rel="stylesheet" href="css/cssValidacion.css">
</head>
<body>
<?php
$mostrarFormulario = true;
$errores = array();
$num1 = "";
$num2 = "";
if(count($_POST) > 0){
    $num1 = isset($_POST["num1"])?$_POST["num1"]:"";
    $num2 = isset($_POST["num2"])?$_POST["num2"]:"";
    require_once "./servidor/funcionesValidacion.php";
    $errores["num1"] = validarnum1($num1);
    $errores["num2"] = validarnum2($num2);

    if(count($errores["num1"]) === 0 && count($errores["num2"]) === 0){
        $mostrarFormulario = false;
        ?>
        <h1>DATOS DEL FORMULARIO</h1>
        num1+num2: <?php echo $num1+$num2 ?>
        
<?php
    }
}

if($mostrarFormulario){
?>
    <span class="spinner m-3">
        <div class="dot1"></div>
        <div class="dot2"></div>
    </span>
    <div class="container-fluid">
        <form id="formulario" method="POST" action="" onsubmit="validarFormulario()">
            <div class="form-row">
                <div class="form-group col-6">
                    <label for="num1">num1</label>
                    <input id="num1" class="form-control" value="<?php echo $num1?>" name="num1" onchange="validarnum1()" />
                    <div class="error bg-danger">
                        <?php
                            if(isset($errores["num1"]) && count($errores["num1"]) > 0){
                                foreach($errores["num1"] as $error){
                                    echo "<div>".$error."</div>";
                                }
                            }
                        ?>
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-6">
                    <label for="num2">num2</label>
                    <input id="num2" class="form-control" value="<?php echo $num2?>" name="num2" onchange="validarnum2()"/>
                    <div class="error bg-danger">
                        <?php
                        if(isset($errores["num2"]) && count($errores["num2"]) > 0){
                            foreach($errores["num2"] as $error){
                                echo "<div>".$error."</div>";
                            }
                        }
                        ?>
                    </div>
                </div>
            </div>

            <button class="btn btn-success" >Enviar Formulario</button>

        </form>
    </div>

    <div class="modal fade" id="modal" data-backdrop="static">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">VALIDANDO</h5>
                </div>
                <div class="modal-body">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped progress-bar-animated w-100 bg-info" role="progressbar" ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php } ?>

</body>
</html>