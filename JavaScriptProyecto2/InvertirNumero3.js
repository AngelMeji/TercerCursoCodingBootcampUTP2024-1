/*
- Fecha de publicacion: 19.04.2023
- Hora de publicacion: 11:30 PM
-Versión de codigo: 1
- Autor: Ing(c): Jose Angel Mejia Medina - Juan Jose Posada -Juan Esteban Ortiz
- Nombre del lenguaje utilizado: "ECMASCRIPT 6.0" (Javascript 6.0)
- Version del lenguaje utilizado: 6.0
- Universidad Tecnologica de Pereira
- Programa de Ingenieria de Sistemas y Computacion
- Descripcion de la funcionalidad del programa:
    Este programa lee desde el teclado un número entero y lo imprime al revés.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo solicita al usuario un número entero. Luego, recorre el número de atrás hacia adelante y lo imprime al revés en la consola.
*/
const prompt = require('prompt-sync')();

console.log('Este programa lee desde el teclado un número entero y lo imprime al revés');
let numero = prompt("Ingrese un número: "); // Se lee un número
let numeroInvertido = ""; // Se declara una variable para guardar el número invertido
let longitud = numero.length; // Se guarda la longitud del número

for (let i = longitud - 1; i >= 0; i--) // Se recorre el número de atrás hacia adelante
{
    numeroInvertido += numero[i];
}

console.log(`El número invertido es: ${numeroInvertido}`);

//FIN