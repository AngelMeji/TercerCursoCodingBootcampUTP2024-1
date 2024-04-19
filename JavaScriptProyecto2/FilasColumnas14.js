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
    Este programa imprime un patrón de letras. El patrón se forma con la letra 'P' y se va incrementando en cada fila. El patrón se imprime en la consola.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo recorre las filas y columnas del patrón y verifica si la posición actual corresponde a la letra 'P' o a un espacio en blanco. Luego, imprime la letra 'P' o un espacio en blanco en la posición actual. El algoritmo imprime el patrón en la consola.
*/
function imprimirLetra() {
    const maxFilas = 7; // Se declara una variable para el número máximo de filas
        const maxColumnas = 13; // Se declara una variable para el número máximo de columnas
        let output = ""; // Se declara una variable para guardar la salida
        let letra = "P"; // Se declara una variable para guardar la letra inicial
        
        for (let fila = 1; fila <= maxFilas; fila++) {
            output = ""; 
            for (let columna = 1; columna <= maxColumnas; columna++) {
                if (columna >= fila && columna <= maxColumnas - fila + 1) {
                    output += `${letra} `;
                } else {
                    output += "  ";
                }
            }
            console.log(output);
        }
}
  
imprimirLetra(); 