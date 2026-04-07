// 11. Ordenar números descendentemente con sort 
// Objetivo: cambiar criterio de orden. 
// Usa el mismo arreglo anterior y ordénalo de mayor a menor.

const numeros = [45, 12, 78, 3, 19, 1, 3.5]; //tenemos el array base

const mayorMenor = [...numeros].sort((a,b) => b - a);

console.log(mayorMenor);
console.log(numeros);
// sort ordena los elementos del array base en uno nuevo de mayor a menor
