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
    Este programa imprime un patrón de letras en forma de pirámide invertida. El patrón se forma con la letra 'P' y se va incrementando en cada fila. El patrón se imprime en la consola.
- Descripcion de la funcionalidad del algoritmo:
      El algoritmo recorre las filas y columnas de la pirámide invertida y verifica si la posición actual corresponde a la letra 'P' o a un espacio en blanco. Luego, imprime la letra 'P' o un espacio en blanco en la posición actual. El algoritmo imprime la pirámide invertida en la consola.
*/

let maxFilas = 6; // Se declara una variable para el número máximo de filas
 let maxColumnas = 46;  // Se declara una variable para el número máximo de columnas
 let minColumnas = 34; // Se declara una variable para el número mínimo de columnas
 let letra = "P";  // Se declara una variable para guardar la letra inicial
 for (let fila = 1; fila <= maxFilas; fila++) { 
      let output = '                                   ';
     for (let espaciados = 0; espaciados <= (fila)*2; espaciados++) {
        output += ' '
     }
     for(let columnas = minColumnas; columnas <= maxColumnas - (fila)*2; columnas++){
        output += letra + ' '
    }
    console.log(output);
}
