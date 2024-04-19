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
    Este programa calcula el factorial de un número entero no negativo ingresado por el usuario.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo solicita al usuario un número entero no negativo. Luego, calcula el factorial del número ingresado. Para ello, se multiplica el número por cada entero positivo menor o igual a él. Finalmente, se imprime el factorial del número en la consola.
*/

const prompt = require('prompt-sync')();

function Factorial() {
    let numero = parseInt(prompt('Ingrese un número: ')); // Se lee un número entero no negativo
    let factorial = 1; // Se declara una variable para guardar el factorial del número ingresado

    for (let i = 1; i <= numero; i++) // Se calcula el factorial del número ingresado
    {
        factorial = i * factorial;
    }

    console.log(`El factorial de ${numero} es ${factorial}`);
}

Factorial();