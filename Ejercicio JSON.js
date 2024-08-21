const { LocalStorage } = require('node-localstorage');

const localStorage = new LocalStorage('./scratch');

let Libro = {
    Titulo: "Los cuatro acuerdos",
    Autor: "Miguel Ruiz",
    Año: 2011
};

let LibroJSON = JSON.stringify(Libro);

localStorage.setItem("Libro", LibroJSON);

let LibroRecuperadoJSON = localStorage.getItem("Libro");
let LibroRecuperado = JSON.parse(LibroRecuperadoJSON);

console.log(LibroRecuperado);