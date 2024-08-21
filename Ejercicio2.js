"Ejercicio2: Crea una variable hora y usa condicionales para mostrar: buenos dias si hora esta entre 6 y 12. buenas tardes si la hora esta entre 12 y 18. buenas noches si la hora esta entre 18 y 6"

let hora = 12;

if (hora >= 6 && hora <12) {
    console.log("Buenos días")
}
else if (hora >=12 && hora <18) {
    console.log("Buenas tardes")
}
else {
    console.log("Buenas noches")
}