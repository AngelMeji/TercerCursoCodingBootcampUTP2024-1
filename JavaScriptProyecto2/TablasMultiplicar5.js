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
    Este programa imprime las tablas de multiplicar del 1 al 10.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo recorre los multiplicadores del 1 al 10 y, para cada multiplicador, recorre los multiplicandos del 1 al 10. Luego, calcula el resultado de la multiplicación y lo imprime en la consola.
*/

function mostrarTablasMultiplicar() {
    for (let multiplicador = 1; multiplicador <= 10; multiplicador++) // Se recorre desde 1 hasta 10
    {
        console.log(`Tabla del ${multiplicador}`);
        for (let multiplicando = 1; multiplicando <= 10; multiplicando++) // Se recorre desde 1 hasta 10
         {
            let resultado = multiplicador * multiplicando; // Se calcula el resultado de la multiplicación
            console.log(`${multiplicador} * ${multiplicando} = ${resultado}`);
        }
    }
}

mostrarTablasMultiplicar();