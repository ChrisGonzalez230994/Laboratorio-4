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
console.log(range(1,10,));

console.log(range(10,2,-1));


function suma(arr){
    let total = 0;
    for(let num of arr){
        total += num;
    }
    return total;
}

console.log(`La suma es: ${suma(range(1, 10))}`);



/*
Invertir un arreglo
Los arreglos tienen Array.reverse(), pero a modo de ejercicio escribir reverseArray y reverseArrayInPlace.
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

// ["C", "B", "A"];
console.log(myArray);

// ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// [5, 4, 3, 2, 1]
*/



