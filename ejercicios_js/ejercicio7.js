// 7. Sumar números con reduce 
// Objetivo: acumular valores. 
// const numeros = [5, 10, 15, 20]; 
// Usa reduce para obtener la suma total del arreglo. 
// Resultado esperado:
// 50

const numeros = [5, 10, 15, 20];//tenemos el array base
const total = numeros.reduce((acumulador,numero)=> acumulador+ numero,0);//definimos un nuevo array con reduce
console.log(total);//imprime el total
// reduce transforma un array en otro siguiendo una serie de pasos que definimos en la función arrow
