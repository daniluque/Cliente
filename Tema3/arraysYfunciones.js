let animal1 = { nombre: "Thor", especie: "Perro", raza: "caniche", vida: 5 };
let animal2 = { nombre: "Capitan America", especie: "Gato", raza: "siames", vida: 8 };
let animal3 = { nombre: "Viuda Negra", especie: "Perro", raza: "bulldog", vida: 15 };
let animal4 = { nombre: "Hulk", especie: "Perro", raza: "pastor aleman", vida: 12 };
let animal5 = { nombre: "Ojo de Halcon", especie: "Perro", raza: "san bernardo", vida: 9 };
let animal6 = { nombre: "Loky", especie: "Perro", raza: "salchicha", vida: 4 };
let animal7 = { nombre: "Iron Man", especie: "Conejo", raza: "pascuas", vida: 9 };
let animal8 = { nombre: "WarMachine", especie: "Perro", raza: "raton de praga", vida: 20 };
let animal9 = { nombre: "Vision", especie: "Perro", raza: "pastor belga", vida: 12 };
let animal10 = { nombre: "Mercurio", especie: "Pajaro", raza: "loro", vida: 15 };

let listadoAnimales = [animal1, animal2, animal3, animal4, animal5, animal6, animal7, animal8, animal9, animal10];

// Dada la lista de animales, habría que implementar las siguientes funciones (2 puntos)

function existeAlgunaEspeciePerroConVidaPares() {
    return console.log(listadoAnimales.filter(x => x.especie === 'Perro' && x.vida % 2 === 0));
}

// Dada una especie, sumar las vidas de todas los animales con
// más de una palabra en su nombre y que sea de esa especie (2 puntos)
// Esta función debe ejecutarse cada 10 segundos.

function sumarVidas(especie) {
    let sumarVidas = (especie) => alert(listadoAnimales.filter(x => (x.especie === especie)).filter(x => x.nombre.includes(" ")).map(x => x.vida).reduce((acum, x) => acum + x));

    setInterval(
        function () {
            sumarVidas("Perro");
        }
        , 10000);

}
// Obtener una lista de todos los animales dada una especie y una raza
// Ordenados por nombre de forma descendente (2 puntos)
// Esta función debe ejecutarse 10 segundos después de ejecutarse.

function dameAnimales(especie, raza) {
    let lanzar = (especie, raza) => console.log(listadoAnimales.filter(x => x.especie === especie).filter(x => (x.raza === raza)).sort().reverse());
    setTimeout(
        function () {
            return lanzar("Perro", "raton de praga");
        }
        , 10000);

}


// Crear una funcíon, que añada un animal más a lista cumpliendo los siguientes requisitos: 
// Nombre del animal con más vida de la lista
// Especie con menos letras de las especies que hay en la lista
// Raza del animal con el nombre más alto en orden ascdente
// Vida es el número de la posición del primer animal con vida par 
// 4 puntos

function incluirAnimal() {
    let vida = listadoAnimales.findIndex(x => x.vida % 2 === 0);
    listadoAnimales.sort((z, w) => z.vida - w.vida);
    let nombre = listadoAnimales[0].nombre;
    listadoAnimales.sort((z, w) => z.especie.length - w.especie.length);
    let especie = listadoAnimales[0].especie;
    listadoAnimales.sort((z, w) => z.nombre - w.nombre);
    let raza = listadoAnimales[0].raza;
    console.log("Nuevo animal:")
    console.log(nombre);
    console.log(especie);
    console.log(raza);
    console.log(vida);
    let nuevo = { nombre, especie, raza, vida };
    listadoAnimales.push(nuevo);
    console.log(listadoAnimales)
}
