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
  
    Este programa contiene 3 funciones:
        1. Encontrar el número mayor y menor de una lista de números
        2. Concatenar y ordenar dos listas de números
        3. Invertir una lista de números
        ejemplo:
        - Lista 1: [10, 5, 3, 8]
        - Lista 2: [20, 15, 7, 12]
        - Lista concatenada y ordenada: [3, 5, 7, 8, 10, 12, 15, 20]
        - El número mayor es: 20
        - El número menor es: 3
        - Lista invertida: [20, 15, 12, 10, 8, 7, 5, 3]
  */

function encontrarMayorMenor(lista){

    if (lista.length === 0) {
        return "La lista está vacía.";
    }
 
    let mayor = lista[0];  // inicializa el mayor con el primer elemento de la lista
    let menor = lista[0];  // inicializa el menor con el primer elemento de la lista
    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > mayor) {
            mayor = lista[i];
        }
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return {
        mayor: mayor,
        menor: menor
    };
}

function concatenarYOrdenarListas(lista1, lista2) {
    const listaConcatenada = lista1.concat(lista2); // concatena las dos listas
    return listaConcatenada.sort((a, b) => a - b);
}

function invertirLista(lista) {
    return lista.reverse();
}

const lista1 = [10, 5, 3, 8];  // lista 1
const lista2 = [20, 15, 7, 12];  // lista 2
const listaConcatenadaOrdenada = concatenarYOrdenarListas(lista1, lista2);  // concatena y ordena las listas
console.log("Lista concatenada y ordenada:", listaConcatenadaOrdenada);

const resultado = encontrarMayorMenor(listaConcatenadaOrdenada);  // encuentra el mayor y el menor
console.log("El número mayor es:", resultado.mayor);
console.log("El número menor es:", resultado.menor);

const listaInvertida = invertirLista(listaConcatenadaOrdenada);  // invierte la lista
console.log("Lista invertida:", listaInvertida);