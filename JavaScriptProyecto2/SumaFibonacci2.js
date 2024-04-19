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
    Este programa presenta la suma de los elementos de la serie Fibonacci entre 0 y 100.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo calcula la serie de Fibonacci hasta llegar sin sobrepasar el número 100. Luego, suma los elementos de la serie y muestra el resultado en la consola.
*/

function sumaFibonacci() {
    let a = 0; // Primer elemento de la serie fibonacci
    let b = 1; // Segundo elemento de la serie fibonacci
    let c = 0; // Se declara la variable c para guardar la suma de los dos últimos elementos de la serie
    let suma = 0; // Se declara una variable para guardar la suma de los elementos de la serie de Fibonacci
    let serie = []; // Se declara un arreglo para guardar la serie de Fibonacci

    serie.push(a);
    serie.push(b);
    suma = a + b;

    for (let i = 0; a + b <= 100; i++) // Se recorre la serie de Fibonacci hasta llegar sin sobrepasar el número 100
    {
        c = a + b;
        suma = c + suma;
        serie.push(c);
        a = b;
        b = c;
    }
 
    console.log("Este programa presenta la suma de los elementos de la serie Fibonacci entre 0 y 100. Los numeros a sumar son:")
    console.log(`${serie} y su suma es: ${suma}`);

}

sumaFibonacci();