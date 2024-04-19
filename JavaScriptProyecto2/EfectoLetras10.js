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
    Este programa imprime un efecto que hace que las letras se muevan y se vayan acercando entre sí. El efecto se forma con la letra 'A'. El efecto se imprime en la consola.
*/

const columnas = 8; // Se declara una constante para guardar el número de columnas
const velocidad = 1000; // Se declara una constante para guardar la velocidad de impresión

function imprimirLetras() 
{
    let posicionA1 = 0; // Se declara una variable para guardar la posición de la letra A1
    let posicionA2 = columnas - 1; // Se declara una variable para guardar la posición de la letra A2

    const intervalo = setInterval(() => // Se declara un intervalo para imprimir las letras
    { 
        console.clear(); // Se limpia la consola

        for (let i = 0; i < posicionA1; i++) // Se recorre el número de columnas
        {
            process.stdout.write(" "); 
        }
        
        process.stdout.write("A");

        for (let i = posicionA1 + 1; i < posicionA2; i++) // Se recorre el número de columnas
        {
            process.stdout.write(" "); 
        }

        process.stdout.write("A\n"); 

        posicionA1++; 
        posicionA2--; 

        if (posicionA1 >= posicionA2) clearInterval(intervalo);
    }, velocidad);
}

imprimirLetras();