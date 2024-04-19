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
    Este programa calcula diferentes operaciones con números ingresados por el usuario. Se determina la cantidad de números mayores a 150, el número mayor, el número menor, la cantidad de números negativos, el promedio de los números positivos y se evita que el número sea cero.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo solicita al usuario que ingrese 15 números. Para cada número ingresado, se determina si es mayor a 150, si es el número mayor, si es el número menor, si es negativo, si es positivo y se calcula el promedio de los números positivos. Finalmente, se imprimen los resultados en la consola.
*/

const prompt = require('prompt-sync')();

function DiferentesCero() {
    let cantidadMayores150 = 0; // Se declara una variable para guardar la cantidad de números mayores a 150
    let numeroMayor = 0; // Se declara una variable para guardar el número mayor
    let numeroMenor = 0; // Se declara una variable para guardar el número menor
    let cantidadNegativos = 0; // Se declara una variable para guardar la cantidad de números negativos
    let promedioPositivos = 0; // Se declara una variable para guardar el promedio de los números positivos
    let sumaPositivos = 0; // Se declara una variable para guardar la suma de los números positivos
    let cantidadPositivos = 0; // Se declara una variable para guardar la cantidad de números positivos

    for (let i = 0; i < 15; i++) // Se recorre 15 veces
    {
        let numero = parseFloat(prompt(`Ingrese el número ${i + 1}: `)); // Se lee un número
        while (numero === 0) {
            numero = parseFloat(prompt(`El número no puede ser cero, ingrese el número ${i + 1}: `));
        }

        if (numero > 150) {
            cantidadMayores150++;
        }
    
        if (i === 1) {
            numeroMayor = numero;
            numeroMenor = numero;
        } else {
            if (numero > numeroMayor) {
                numeroMayor = numero;
            }
            if (numero < numeroMenor) {
                numeroMenor = numero;
            }
        }
    
        if (numero < 0) {
            cantidadNegativos++;
        } else {
            sumaPositivos += numero;
            cantidadPositivos++;
        }
    }

    promedioPositivos = sumaPositivos / cantidadPositivos;

    console.log(`Cantidad de números Mayores a 150: ${cantidadMayores150}`);
    console.log(`Número mayor: ${numeroMayor}`);
    console.log(`Número menor: ${numeroMenor}`);
    console.log(`Cantidad de Números negativos encontrados: ${cantidadNegativos}`);
    console.log(`Promedio de los Positivos Encontrados: ${promedioPositivos}`);
}

DiferentesCero();