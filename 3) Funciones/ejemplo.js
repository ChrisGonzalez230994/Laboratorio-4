/**
 * EJERCICIOS DE SUMA RANGO
 */

/*
La suma de un rango
1) Escribir la función range que tome dos argumentos, start y end y retorne un arreglo conteniendo todos los numeros desde start hasta end inclusive.
2) Escribir la función sum que reciba un array y retorne la sumatoria de sus elementos.
3) Modificar la función range para que reciba un tercer parámetro adicional step para indicar un salto en la construcción del arreglo. Si no se recibe el parámetro step, la función debe construir el arreglo con números consecutivos. Asegurar que un step negativo produzca un resultado válido.

console.log(range(1, 10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// 55
*/

function range(start, end, step = 1) {
  let arr = [];

  // Si el step es positivo
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      arr.push(i);
    }
  } 
  // Si el step es negativo
  else {
    for (let i = start; i >= end; i += step) {
      arr.push(i);
    }
  }
  return arr;
}

/*Salidas por consola*/
console.log(range(1,10,));
console.log(range(10,1,-1));

/**
 * 
 * @param {number[]} arr - Arreglo de números a sumar
 * @returns {number} La suma de los valores en el arreglo
 */
function suma(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total;
}

/**
 * 
 * @param {number} entero1 - Entero 1
 * @param {number} entero2 - Entero 2
 * @returns {number} - Resultado de la suma entre el entero 1 y el entero 2
 */
function sumaEnteros(entero1, entero2){
  return entero1 + entero2;
}

/*Salidas por consola*/
console.log(`La suma es: ${suma(range(1, 10))}`);
console.log(`La suma es: ${sumaEnteros(3,4)}`);





/**
 * EJERCICIO SE INVERTIR UN ARREGLO
 */

// 1. Devuelve un nuevo arreglo invertido
function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// 2. Invierte el arreglo en el mismo lugar (sin crear otro)
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {

    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
  return arr;
}

// Pruebas
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray)); // ["C", "B", "A"]
console.log(myArray);              // ["A", "B", "C"]

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);           // [5, 4, 3, 2, 1]



//LISTAS
/*
Escribir las funciones **arrayToList**, **listToArray**, **prepend** y **nth**. 

*“the nth element” significa “el enésimo elemento”*

arrayToList(array) debe recibir un arreglo y retornar un objeto como en el ejemplo.

listToArray(list) debe retornar un arreglo a partir de una lista.

prepend(element, list) es una función auxiliar para insertar un elemento al comienzo de una lista.

nth(list, index) debe retornar el elemento en el índice suscripto o undefined si no se encuentra. 
Esta es una buena oportunidad para hacer una versión recursiva de nth.
*/


// Convierte un array en una lista enlazada
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], next: list };
  }
  return list;
}

// Convierte una lista enlazada en un array
function listToArray(list) {
  let array = [];
  for (let node = list; node !== null; node = node.next) {
    array.push(node.value);
  }
  return array;
}

// Inserta un elemento al inicio de la lista
function prepend(element, list) {
  return { value: element, next: list };
}

// Retorna el enésimo elemento de la lista
function nth(list, index) {
  if (!list) return undefined;       // caso base: lista vacía
  if (index === 0) return list.value; // caso base: índice encontrado
  return nth(list.next, index - 1);   // recursión
}


// ----------------- PRUEBAS -----------------
console.log(arrayToList([10, 20]));
// {value: 10, next: {value: 20, next: null}}

console.log(listToArray(arrayToList([10, 20, 30])));
// [10, 20, 30]

console.log(prepend(10, prepend(20, null)));
// {value: 10, next: {value: 20, next: null}}

console.log(nth(arrayToList([10, 20, 30]), 1));
// 20