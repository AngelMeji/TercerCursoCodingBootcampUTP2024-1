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
    Este programa calcula la suma de los factoriales de los números desde 0 hasta N, donde N es un número entero no negativo ingresado por el usuario.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo solicita al usuario un número entero no negativo N. Luego, calcula la suma de los factoriales de los números desde 0 hasta N. Para cada número i desde 0 hasta N, se calcula el factorial de i y se suma al total. Finalmente, se imprime la suma de los factoriales en la consola.
*/
const prompt = require('prompt-sync')();

function SumaFactoriales() {
    let numero = parseInt(prompt('Si n es igual a: ')); // Se lee un número entero no negativo
    while (numero < 0) {
        numero = parseInt(prompt('El número debe ser no negativo, Si n es igual a: '));
    }

    let suma = 0; // Se declara una variable para guardar la suma de los factoriales de los números desde 0 hasta N
    let factorial = 1; // Se declara una variable para guardar el factorial de cada número

    for (let i = 0; i <= numero; i++) // Se recorre desde 0 hasta el número ingresado
     {
        for (let j = 1; j <= i; j++) // Se calcula el factorial de cada número
        {
            factorial = j * factorial;
        }
        suma += factorial;
        factorial = 1;
    }

    console.log(`La suma de sus factoriales es: ${suma}`);
}

SumaFactoriales();