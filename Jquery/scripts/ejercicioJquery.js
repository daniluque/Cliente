$(function() {
    $("#botonCrear").click(crearElementos);
});

function crearElementos() {
    $("#elementos").empty();
    let numeroDivsACrear = $("#numDivs").val();
    for (let i = 1; i <= numeroDivsACrear; i++) {
        let div = $("<div></div");
        let h1 = $(`<h1>DIV Nº${i}</h1>`);
        div.append(h1);
        for (let j = 1; j <= i; j++) {
            let input = $("<input />");
            input.attr("type", "text");
            tipo = "";
            if (j % 2 === 0) {
                tipo = "par";
            } else {
                tipo = "inpar";
            }
            input.attr("data-tipo", tipo);
            input.val(`${i}.${j}`);
            input.attr("id", `${i}_${j}`);
            div.append(input);
        }
        $("#elementos").append(div);
    }
}

$(function() {
    $(botonColorear).click(colorearElementos);
});

function colorearElementos() {
    $("[data-tipo = 'par']").addClass("par");
    $("[data-tipo = 'inpar']").addClass("inpar");
}

$(function() {
    $("#eliminar").click(eliminar);
});

function eliminar() {
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();

    if ($(`[id = '${num1}_${num2}']`).length > 0) {
        $(`[id = '${num1}_${num2}']`).remove();
    } else {
        alert("No hay elementos");
    }
}
$(function() {
    $("#esconder").click(esconder);
});

function esconder() {
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();

    $(`[id = '${num1}_${num2}']`)
        .prev()
        .next()
        .attr("class", "ocultar");
}
$(function() {
    $("#mostrar").click(mostrar);
});

function mostrar() {
    let num1 = $("#num1").val();
    let num2 = $("#num2").val();

    $(`[id = '${num1}_${num2}']`)
        .prev()
        .next()
        .attr("class", "mostrar");
}