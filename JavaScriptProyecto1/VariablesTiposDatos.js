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
    Este programa contiene un menú interactivo con 4 opciones:
        1. Convertir de Celsius a Fahrenheit (funcion que recibe un valor en grados Celsius y 
            retorna su equivalente en grados Fahrenheit la formula es: (Celsius * 9/5) + 32 
            donde celsius es el valor ingresado por el usuario)
            Imput: 35
            Output: 35 grados Celsius son equivalentes a 95.00 grados Fahrenheit

        2. Calcula tu IMC (funcion que calcula el Indice de Masa Corporal (IMC) de una persona
           a partir de su peso en kilogramos y su altura en metros, la formula es: peso / (altura ** 2))
            Imput: 1.75, 70
            Output: Tu Indice de Masa Corporal (IMC) es: 22.86

        3. Generador de Nombre de Usuario
            (funcion que recibe el nombre, apellido y año de nacimiento de una persona  
            y retorna un nombre de usuario)
            Imput: Jose, Mejia, 1998
            Output: Su nombre de usuario es: JoseMejia1998

        4. Función Fibonacci (con ciclos)
            (funcion que recibe un número n y retorna la secuencia Fibonacci de n números)
            Imput: 10
            Output: La secuencia Fibonacci de 10 es: 0,1,1,2,3,5,8,13,21,34,55
   */



const prompt = require('prompt-sync')(); // Importa la librería prompt-sync

function celsiusToFahrenheit(Celsius) {
    return (Celsius * 9/5) + 32;
}

function calcularIMC() {

    const altura = parseFloat(prompt("Ingrese su altura en metros: ")); // solicita la altura
    const peso = parseFloat(prompt("Ingrese su peso en kilogramos: ")); // solicita el peso
    const imc = peso / (altura ** 2);  // calcula el IMC
    console.log(`Tu Indice de Masa Corporal (IMC) es: ${imc.toFixed(2)}`);
}

function generarNombreUsuario() {
    const nombre = prompt("Ingrese su nombre: "); // solicita el nombre
            const apellido = prompt("Ingrese su apellido: "); // solicita el apellido
            const añoNacimiento = parseInt(prompt("Ingrese su año de nacimiento: ")); // solicita el año de nacimiento
            const usuario = nombre + apellido + añoNacimiento;  // genera el nombre de usuario
            console.log(`Su nombre de usuario es: ${usuario}`);
}

function fibonacci() {
    const n = parseInt(prompt("Ingrese un número: ")); // solicita un número
            var fibonacci = []; // crea un arreglo vacío
            fibonacci[0] = 0;
            fibonacci[1] = 1;
            
            for (var i = 2; i <= n; i++) {
              fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
            }
            console.log(`La secuencia Fibonacci de ${n} es: ${fibonacci}`);
}

function main() {
    console.log('Bienvenido al menu interactivo');
   
    while (true) {
      console.log("\nMenú de opciones");
      console.log("1. Convertir de Celsius a Fahrenheit");
      console.log("2. Calcula tu IMC");
      console.log("3. Generador de Nombre de Usuario");
      console.log("4. Función Fibonacci (con ciclos)");
      console.log("5. Salir");

      const option = prompt("Seleccione una opción: "); // solicita una opción

      switch (option) {
        case '1':
            const Celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius: "));  // solicita la temperatura en grados Celsius
            const temperaturaCelsius = Celsius;  // almacena la temperatura en grados Celsius
            const temperaturaFahrenheit = celsiusToFahrenheit(Celsius);  // convierte la temperatura a grados Fahrenheit
            console.log(`${temperaturaCelsius} grados Celsius son equivalentes a ${temperaturaFahrenheit.toFixed(2)} grados Fahrenheit`);
            break;
        case '2':
            calcularIMC();
            break;
        case '3': 
            generarNombreUsuario();
            break;
        case '4':
            fibonacci();
            break;
        case '5':
            console.log("Gracias por usar el menú interactivo. ¡Hasta luego!");
            return;
        default:
            console.log("Opción inválida. por favor, selelccione una opción válida");
       }
   }
}
main(); 