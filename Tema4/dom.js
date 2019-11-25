function Crear() {
    let cont = 1;
    let body = document.body; //Obtenemos el body del HTML

    for (let i = 1; i <= 10; i++) {
        let div = document.createElement("div"); //Creamos un div
        let texto = document.createTextNode("DIV Nº " + cont); //Creamos el texto dentro de ese div
        div.appendChild(texto); //Añadimos el texto al div
        body.appendChild(div); //Añadimos el div al body del html
        div.id = "div" + cont;
        cont++;

        for (let i = 1; i <= 10; i++) {
            let input = document.createElement("input");
            div.appendChild(input);
            input.name = "input" + i;
        }
    }
}

function crearDivs(num) {
    let body = document.body; //Obtenemos el body del HTML
    for (let i = 1; i <= num; i++) {
        let div = document.createElement("div"); //Creamos un div
        let texto = document.createTextNode(`${"Div N: "+i}`); //Creamos el texto que tendra el h1
        let h1 = document.createElement("h1") //Creamos el h1
            /*
            *aplicamos los estilos con estas propiedades
            div.style.width = "400px"; 
            div.style.height = "100px";
            div.style.border = "1px solid black"
            */
        body.appendChild(div); //Añadimos el div al body del html
        div.appendChild(h1); //Añadimos el H1 al div
        h1.appendChild(texto); //Añadimos el texto a el h1
        if (i % 2 === 0) {
            div.classList.add("divpar")

        } else {
            div.classList.add("divimpar")
        }

    }
}

function eliminarElementosPares() {
    let div = document.getElementsByClassName("divpar");
    let x = div.length;
    for (let i = 0; i < x; i++) {
        div[0].remove();

    }
}