class Suplemento {
    constructor(nombre, precio, peso, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.peso = peso;
        this.cantidad = cantidad;
    }

    aumentarPrecio(precio) {
        this.precio = this.precio + precio;
    }
}

const creatina = new Suplemento("Creatina", 5000, "150g", 8);
const proteina = new Suplemento("Proteína", 2500, "1kg", 5);
const preWorkout = new Suplemento("Pre-entreno", 3500, "200g", 3);
const massGainer = new Suplemento("Ganador de masa", 2000, "1.2kg", 0);

const inventarioDeProductos = [];
inventarioDeProductos.push(massGainer);
inventarioDeProductos.push(proteina);
inventarioDeProductos.push(preWorkout);
inventarioDeProductos.push(creatina);

for (let suplemento of inventarioDeProductos) {
    console.log(suplemento);
}

alert("¡Bienvenido a la página de suplementos mas grande del país!")
let eleccion2 = parseInt(prompt("¿Qué deseas hacer? \n  1) Precio con iva \n  2) Ver stock de productos \n  3) Especificaciones de productos \n  4) Salir "))
while (eleccion2 != 1 && eleccion2 != 2 && eleccion2 != 3 && eleccion2 != 4) {
    eleccion2 = parseInt(prompt("¿Qué deseas hacer? \n  1) Precio con iva \n  2) Ver stock de productos \n  3) Especificaciones de productos \n  4) Salir "))
}

function calcularPrecioIva() {
    let eleccion = parseInt(prompt(`¿Qué producto desea calcular? \n  1) ${creatina.nombre} \n  2) ${preWorkout.nombre} \n  3) ${proteina.nombre} \n  4) ${massGainer.nombre}`))
    while (eleccion != 1 && eleccion != 2 && eleccion != 3 && eleccion != 4) {
        eleccion = parseInt(prompt(`¿Qué producto desea calcular? \n  1) ${creatina.nombre} \n  2) ${preWorkout.nombre} \n  3) ${proteina.nombre} \n  4) ${massGainer.nombre}`))
    }
    switch (eleccion) {
        case 1:
            alert(`El precio con IVA será de $${(creatina.precio * 1.21).toFixed(1)}.`)
            break
        case 2:
            alert(`El precio con IVA será de $${(preWorkout.precio * 1.21).toFixed(1)}.`)
            break
        case 3:
            alert(`El precio con IVA será de $${(proteina.precio * 1.21).toFixed(1)}.`)
            break
        case 4:
            alert(`El precio con IVA será de $${(massGainer.precio * 1.21).toFixed(1)}.`)
            break
    }
}

function stockProductos() {
    let eleccion = parseInt(prompt(`¿Qué producto desea calcular? \n  1) ${creatina.nombre} \n  2) ${preWorkout.nombre} \n  3) ${proteina.nombre} \n  4) ${massGainer.nombre}`))
    while (eleccion != 1 && eleccion != 2 && eleccion != 3 && eleccion != 4) {
        eleccion = parseInt(prompt(`¿Qué producto desea calcular? \n  1) ${creatina.nombre} \n  2) ${preWorkout.nombre} \n  3) ${proteina.nombre} \n  4) ${massGainer.nombre}`))
    }
    switch (eleccion) {
        case 1:
            alert(`Quedan ${creatina.cantidad} unidades.`)
            break
        case 2:
            alert(`Quedan ${preWorkout.cantidad} unidades.`)
            break
        case 3:
            alert(`Quedan ${proteina.cantidad} unidades.`)
            break
        case 4:
            alert(`Quedan ${massGainer.cantidad} unidades.`)
            break
    }
}

function especificacionesProductos() {
    let eleccion = parseInt(prompt(`¿Qué producto desea conocer? \n  1) ${creatina.nombre} \n  2) ${preWorkout.nombre} \n  3) ${proteina.nombre} \n  4) ${massGainer.nombre}`))
    while (eleccion != 1 && eleccion != 2 && eleccion != 3 && eleccion != 4) {
        eleccion = parseInt(prompt(`¿Qué producto desea calcular? \n  1) ${creatina.nombre} \n  2) ${preWorkout.nombre} \n  3) ${proteina.nombre} \n  4) ${massGainer.nombre}`))
    }
    switch (eleccion) {
        case 1:
            alert(`La ${creatina.nombre} es una sustancia química que se encuentra naturalmente en el cuerpo. Se utiliza para mejorar el rendimiento del ejercicio y la masa muscular, ya que participa en la producción de energía para los músculos. Viene en un pote de ${creatina.peso}.`)
            break
        case 2:
            alert(`El ${preWorkout.nombre} es un suplemento alimenticio formado por distintos ingredientes. Se utiliza para aumentar la energía, resistencia y concentración durante los entrenamientos, mejorando el rendimiento deportivo y consiguiendo mejores marcas personales. Viene en un pote de ${preWorkout.peso}.`)
            break
        case 3:
            alert(`La ${proteina.nombre} pueden obtenerse a través de la alimentación diaria (la forma más habitual), o mediante la ingesta de suplementos alimenticios ricos en estos macronutrientes esenciales para nuestra nutrición. Viene en un pote de ${proteina.peso}.`)
            break
        case 4:
            alert(`El ${massGainer.nombre} es un suplemento deportivo para aquellos atletas y deportistas que, debido a sus objetivos, necesitan mantener una dieta con muy altos niveles de carbohidratos o que les cuesta subir de peso ganando masa muscular magra. Viene en un pote de ${massGainer.peso}.`)
            break
    }
}

function quit(){
    alert("¡Gracias por usar nuestra página!");
}


switch (eleccion2) {
    case 1:
        calcularPrecioIva();
        break;
    case 2:
        stockProductos();
        break;
    case 3:
        especificacionesProductos();
        break;
    case 4:
        quit();
        break;
    default:
        alert("Datos incorrectos");
}