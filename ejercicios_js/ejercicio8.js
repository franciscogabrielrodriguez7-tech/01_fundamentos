// 8. Multiplicar todos los números con reduce 
// Objetivo: practicar acumuladores. 
// const numeros = [2, 3, 4]; 
// Usa reduce para obtener el producto total. 
// Resultado esperado:
// 24


const numeros = [2, 3, 4];//tenemos el array base
const total = numeros.reduce((acumulador,numero)=> acumulador * numero,1);//definimos un nuevo array con reduce
console.log(total);//imprime el total