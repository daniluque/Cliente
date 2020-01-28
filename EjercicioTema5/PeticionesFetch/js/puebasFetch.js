function peticion(){
    let select = $("#tipo").val();
    let form =new FormData();
    form.append("nombre",select);
    alert("SE VA A EJECUTAR LA PETICIÓN");
    fetch("servidor/crearForm.php", {
        method: 'post',
        body: form
    })
    .then(function(response){ return response.text()})
        .then(anadirCampo);
}

function anadirCampo(resultado) {
    
}
