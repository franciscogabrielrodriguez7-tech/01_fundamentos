// 19. Ejercicio combinado: filter + map 
// Objetivo: encadenar métodos. 
// const numeros = [3, 8, 15, 20, 7, 12, 1, 30]; 
// 1. Filtra solo los números mayores que 10. 
// 2. Luego multiplícalos por 2. 
// Resultado esperado:
// [30, 40, 24, 60]

const numeros = [3, 8, 15, 20, 7, 12, 1, 30, 11, 10.1];

const resultado = [...numeros].filter(num => num > 10).map(num => num * 2).sort((a,b)=> a-b);

console.log(resultado);