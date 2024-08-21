"Crear un arrego llamado colores con al menos 4 colores. Imprime en la consola el primer y el útltimo color del arreglo"

let colores = ["Azul", "Amarillo","Rojo", "Verde"]
console.log("El primer color es:",colores[0]);

console.log("El último color es:", colores[3]);

"Agrega un nuevo color al arreglo"
colores.unshift("Negro");
console.log(colores);

"Elimina el primer color del arreglo"
colores.shift();
console.log(colores);

"Imprime la cantidad de colores que tiene el arreglo"
console.log(colores.length);