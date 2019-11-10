function Crear() {
    let cont = 1;
    let body = document.body;//Obtenemos el body del HTML

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