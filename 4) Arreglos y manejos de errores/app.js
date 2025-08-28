/*
# Ejercicios
## Flattening ##
Usar los métodos estandar de los Arrays reduce en combinación con concat para aplanar el siguiente Array de Arrays.
*/

/* reduce */
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

let arrays = [[1, 2, 3], [4, 5], [6]];

let resultado = reduce(arrays, (a,b) => a.concat(b),[]);

console.log("Ejercicio LOOP");
console.log(resultado);



/*
## Loop ##

Escribir una funcion de orden superior **loop** que tome por argumento un valor(**value**), una función **test**,
una función **update** y una función **body**. En cada iteración deberá correr el test sobre el valor y cortar la
ejecucion si este retorna false.

La función loop se comportará de manera similar a un bucle for.
*/

function loop(value){
    
}



loop(3, n => n > 0, n => n - 1, console.log);