<!DOCTYPE html>
<html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>Ejemplo Ajax</title>

    <!-- Incluimos librería Bootstrap css-->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- Incluimos las librerís JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <!-- Mis archivos -->
    <script src="js/borrar.js"></script>
    
</head>

<body>

<?php
   require_once './servidor/mostrarTabla.php';
?>

    <div id="spinner" class="spinner">
        <div class="dot1"></div>
        <div class="dot2"></div>
    </div>

    <div class="container">
        <table class="table table-dark">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Eliminar</th>
              </tr>
            </thead>
            <tbody>
            <?php
        while($cachimba = $cachimbas->fetch_assoc()) {
            ?>
            <tr data-idPelicula="<?php echo $pelicula["id"]; ?>">
                <td><?php echo $cachimba["id"]; ?></td>
                <td><?php echo $cachimba["marca"]; ?></td>
                <td><?php echo $cachimba["modelo"]; ?></td>
                <td><?php echo $cachimba["precio"]; ?></td>
                <td><button data-idEliminar="<?php echo $cachimba["id"]; ?>" data-accion="eliminar">Eliminar</button></td>
            </tr>    
            <?php
        }
    ?>        
            </tbody>
          </table>
    </div>

<div id="modalEliminar" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Eliminar Cachimba</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>¿Estás seguro de eliminar esta Cachimba?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
        <button id="botonConfirmarEliminar" type="button"  class="btn btn-primary" data-accion="confirmar-eliminar" data-ideliminar="">Confirmar</button>
      </div>
    </div>
  </div>
</div>

</html>