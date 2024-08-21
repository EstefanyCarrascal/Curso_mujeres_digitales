"Ejercicio: Contador de números del 1 al 10"

let contadornumeros = 0;

for (let i = 1; i<=10; i++) {
    console.log(i);

    if (i > 5) {
        contadornumeros++;
    }
}

console.log("Números mayores que 5:"+contadornumeros);
