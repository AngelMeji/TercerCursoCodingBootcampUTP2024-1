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
    Este programa imprime las parejas de números enteros del 0 al 9.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo recorre los números del 0 al 9 y los agrupa en parejas de dos números. Luego, imprime las parejas en la consola.
*/

function parejasEnteros() {
    let j = 0; // Se declara una variable para guardar el segundo número de la pareja

    while (j < 2) {
        for (let i = 0; i < 10; i++) // Se recorre desde 0 hasta 9
        {
            if (i % 2 === 0) {
                j++;
            } 
            console.log(`${i} ${j}`);
        } 
        
    }
}

parejasEnteros();