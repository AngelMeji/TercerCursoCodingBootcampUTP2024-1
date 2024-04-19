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
    Este programa imprime un patrón de letras en forma de flechas apuntando hacia el centro. El patrón se forma con la letra 'A' y se va incrementando en cada fila. El patrón se imprime en la consola.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo recorre las filas y columnas de las flechas y verifica si la posición actual corresponde a la letra 'A' o a un espacio en blanco. Luego, imprime la letra 'A' o un espacio en blanco en la posición actual. El algoritmo imprime las flechas en la consola.

*/

function filasColumnas() {
    let filas = 4; // Se declara una variable para el número de filas
    let columnas = 7; // Se declara una variable para el número de columnas
    let letra = 'A'; // Se declara una variable para guardar la letra inicial
    let output = '                           '; // Se declara una variable para guardar la salida

    for (let fila = 1; fila <= filas; fila++) {
        output = '                           ';
        for (let columna = 1; columna <= columnas; columna++) {
            if (columna <= fila || columna >= columnas - fila + 1) {
                output += `${letra}`;
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }

    for (let fila = filas - 1; fila >= 1; fila--) {
        output = '                           ';
        for (let columna = 1; columna <= columnas; columna++) {
            if (columna <= fila || columna >= columnas - fila + 1) {
                output += `${letra}`;
            } else {
                output += ' ';
            }
        }
        console.log(output);
    }
}

filasColumnas();