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
    Este programa imprime un patrón de ternas de enteros. El patrón se forma con los números del 1 al 9 y se va incrementando en cada terna. El patrón se imprime en la consola.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo recorre los números del 1 al 9 y los agrupa en ternas de tres números. Luego, imprime las ternas en la consola.
*/

function ternasEnteros() {
    let j = 0; // Se declara una variable para guardar el segundo número de la terna
    let k = 0; // Se declara una variable para guardar el tercer número de la terna

    while (j < 3) // Se recorre hasta llegar a 3
    {
        for (let i = 1; i < 10; i++) // Se recorre desde 1 hasta 9
        {
            if (j === 3) // Si j es igual a 3, se reinicia en 0
            {
                j = 0;
            }
            if (k === 3) // Si k es igual a 3, se reinicia en 0
            {
                k = 0;
            }
            console.log(`${i} ${j + 1} ${k + 1}`);
            k++;
            if (i % 3 === 0) // Si el residuo de i entre 3 es igual a 0, se aumenta j
            {
                j++;
            }
        }
    }
}

ternasEnteros();