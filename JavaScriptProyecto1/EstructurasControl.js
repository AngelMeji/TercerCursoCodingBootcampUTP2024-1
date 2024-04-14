/* 
- Fecha de publicacion: 14.04.2023
- Hora de publicacion: 5:50 PM
-Versión de codigo: 1
- Autor: Ing(c): Jose Angel Mejia Medina - Jordan Valencia Patiño
- Nombre del lenguaje utilizado: "ECMASCRIPT 6.0" (Javascript 6.0)
- Version del lenguaje utilizado: 6.0
- Universidad Tecnologica de Pereira
- Programa de Ingenieria de Sistemas y Computacion
- Descripción de la funcionalidad del programa:
  Para realizar este proyecto instalamos la librería prompt-sync, 
  la cual nos permite leer datos de la consola de manera sincrónica. 

    Este programa contiene un menú interactivo con 3 opciones:
        1. Adivina el Número [0, 100) (función que genera un número aleatorio entre 0 y 100 
            y le pide al usuario que adivine el número, mostrando si el número es mayor o menor)
        imput: 50
        output: El número es menor.
        imput: 25
        output: El número es mayor.
        imput: 35
        output: ¡Felicidades! Adivinaste el número en 3 intentos.

        2. Calculadora de Factorial (función que calcula el factorial de un número ingresado por el usuario)
        imput: 5
        output: El factorial de 5 es: 120

        3. Contador de Vocales (función que cuenta las vocales de un texto ingresado por el usuario)
        imput: Hola Mundo
        output: { a: 1, e: 0, i: 0, o: 2, u: 1 }

  */

const prompt = require('prompt-sync')();  // Importa la librería prompt-sync

function numeroAleatorio() {
    const numeroAleatorio = Math.floor(Math.random() * 100);  // genera un número aleatorio entre 0 y 100
              let numero = -1;  // inicializa el número a adivinar
                let intentos = 0;  // inicializa el contador de intentos
                while (numero !== numeroAleatorio) {
                    numero = parseInt(prompt("Adivina el número: "));
                    intentos++;
                    if (numero < numeroAleatorio) {
                        console.log("El número es mayor.");
                    } else if (numero > numeroAleatorio) {
                        console.log("El número es menor.");
                    } else {
                        console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
                    }
                }
}

function factorial() {
    const numero = parseInt(prompt("Ingrese un número para calcular su factorial: "));  // solicita un número
    let factorial = 1;  // inicializa el factorial en 1
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    console.log(`El factorial de ${numero} es: ${factorial}`);
}

function contarVocales() {
    const texto = prompt("Ingrese un texto para contar vocales: ");  // solicita un texto
            const conteoVocales = {
                'a': 0,
                'e': 0,
                'i': 0,
                'o': 0,
                'u': 0
            };  // inicializa el conteo de vocales
            for (let letra of texto) {
                if (letra.toLowerCase() in conteoVocales) {
                    conteoVocales[letra.toLowerCase()]++;
                }
            }
            console.log(conteoVocales);
}

function main() {
    console.log('Bienvenido al menu interactivo');
   
    while (true) {
      console.log("\nMenú de opciones");
      console.log("1. Adivina el Número [0, 100)");
      console.log("2. Calculadora de Factorial");
      console.log("3. Contador de Vocales");
      console.log("4. Salir");

      const option = prompt("Seleccione una opción: "); // solicita una opción

      switch (option) {
        case '1':
            numeroAleatorio();
            break;
        case '2':
            factorial();
            break;
        case '3': 
            contarVocales();
            break;
        case '4':
            console.log("Gracias por usar el menú interactivo. ¡Hasta luego!");
            return;
        default:
            console.log("Opción inválida. por favor, selelccione una opción válida");
       }
   }
}
main(); 