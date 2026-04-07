// 10. Ordenar números ascendentemente con sort
// Objetivo: ordenar valores numéricos. 
// const numeros = [45, 12, 78, 3, 19, 1]; 
// Ordénalos de menor a mayor.

const numeros = [45, 12, 78, 3, 19, 1, 3.5]; //tenemos el array base
const menorMayor = numeros.sort((a,b) => a - b);
const mayorMenor = numeros.sort((a,b) => b - a);

console.log(menorMayor);
console.log(mayorMenor);

// eso lanza el mismo array 

const minMax = [...numeros].sort((a,b) => a - b);
const maxMin = [...numeros].sort((a,b) => b - a);

console.log(minMax);
console.log(maxMin);