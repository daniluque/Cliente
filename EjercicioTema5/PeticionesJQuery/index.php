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
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div class="container">
    <div class="row">
        <form>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" onchange="validarNombre()">
            </div>

            <div class="form-group">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" id="apellido">
            </div>

            <div class="form-group">
                <label for="edad">Edad</label>
                <input type="text" class="form-control" id="edad">
            </div>

            <div class="form-group">
                <label for="prefesion">Profesion</label>
                <select id="profesion" class="form-control">
                    <option selected value="informatico">Informatico</option>
                    <option value="front">Front-end</option>
                    <option value="fullstack">Full-stack</option>
                </select>
            </div>
            
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="terminos">
                <label class="form-check-label">
                Terminos y condiciones
                </label>
            </div>

            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</div>

</body>
</html>