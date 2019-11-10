//creamos la clase con su prototipo
class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let p1 = new persona("jorge", 99);
let p2 = new persona("pepito", 30);
let p3 = new persona("juanito", 10);
let p4 = new persona("lola", 30);
let p5 = new persona("maria", 50);
let personas = [p1, p2, p3, p4, p5];

personas.sort(ordenarEdad);
console.log(personas);
personas.sort(ordenarNombre);
console.log(personas);
//Necesitamos acceder a la propiedad del objeto con el .NombrePropiedad
function ordenarEdad(a, b) {
    return a.edad - b.edad;
}
function ordenarNombre(a, b) {
    return - a.nombre.localeCompare(b.nombre);
}
//retorna las personas mayores de edad con funciones flecha
console.log(personas.filter(x => x.edad >= 18));
console.log(personas.filter(x => x.edad >= 18));

function hayCadenasConVocales() {
    let cadenas = [
        "hll",
        "ab",
        "aaa"
    ]

}


