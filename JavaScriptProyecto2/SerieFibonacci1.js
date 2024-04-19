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
    Este programa imprime la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo calcula la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000. Luego, muestra la serie en la consola.
*/

function fibonacci() {
let a = 0; // Primer elemento de la serie fibonacci
    let b = 1; // Segundo elemento de la serie fibonacci
    let c = 0; // Se declara la variable c para guardar la suma de los dos últimos elementos de la serie
    let serie = []; // Se declara un arreglo para guardar la serie de Fibonacci
    
    serie.push(a);
    serie.push(b);

   for (let i = 0; a + b <= 10000; i++) // Se recorre la serie de Fibonacci hasta llegar sin sobrepasar el número 10,000
   {  
        c = a + b;
        serie.push(c);
        a = b;
        b = c;

    }

    console.log("La serie de Fibonacci hasta llegar sin sobrepasar el número 10,000 es: " + serie);
}


fibonacci();