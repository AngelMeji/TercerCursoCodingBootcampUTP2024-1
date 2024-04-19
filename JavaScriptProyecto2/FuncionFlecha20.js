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
    Este programa utiliza una función llamada "rush" que imprime un patrón de asteriscos en forma de rectángulo. El patrón se imprime en la consola. Si los valores de entrada no son enteros positivos, se imprime un mensaje de error.
- Descripcion de la funcionalidad del algoritmo:
    El algoritmo toma dos parámetros, x e y, que representan el ancho y alto del patrón respectivamente. Comprueba si x e y son enteros positivos. Calcula el ancho máximo como el máximo entre x y n. Luego, crea cadenas que representan la parte superior, media y inferior del patrón. Imprime la parte superior del patrón. Si y es mayor que 1, imprime la parte media del patrón y la parte inferior. Si y es igual a 1, imprime un borde inferior simple.
*/

const prompt = require("prompt-sync")(); // Importa la función prompt del módulo prompt-sync.

const rush = (x, y) => { // Declara una función llamada "rush" que toma dos parámetros, x e y.
    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) { // Comprueba si x e y son enteros positivos.
      console.log("Los valores de x e y deben ser enteros positivos."); // Imprime un mensaje de error si x o y no son enteros positivos.
      return; // Retorna para finalizar la ejecución de la función.
    }
    const ancho = Math.max(x, 2); // Calcula el ancho máximo como el máximo entre x y 2.
    const topBottom = `/${'*'.repeat(ancho - 2)}\\`; // Crea una cadena que representa la parte superior.
    const topBottom2 = `\\${'*'.repeat(ancho - 2)}/`; // Crea una cadena que representa la parte inferior.
    const middle = `*${' '.repeat(ancho - 2)}*`; // Crea una cadena que representa la parte media del patrón.
    console.log(topBottom); // Imprime la parte superior del patrón.
    for (let i = 0; i < y - 2; i++) { // Bucle para imprimir la parte media del patrón (si y es mayor que 1).
      console.log(middle); // Imprime la parte media del patrón.
    }
    if (y > 1) { // Comprueba si y es mayor que 1.
        console.log(topBottom2); // Imprime la parte inferior del patrón.
    } else { // Si y es igual a 1.
        console.log("/"); // Imprime un borde inferior simple.
    }
  };

    const x = Number(prompt("Ingrese el ancho: ")); // Solicita al usuario que ingrese el ancho del rectángulo.
    const y = Number(prompt("Ingrese el alto: ")); // Solicita al usuario que ingrese el alto del rectángulo.

    rush(x, y); // Llama a la función "rush" con los valores de entrada proporcionados por el usuario.
