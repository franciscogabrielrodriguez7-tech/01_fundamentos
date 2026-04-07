// 1. Duplicar números con map
// Objetivo: practicar transformación de arreglos.
// Dado el arreglo:
// const numeros = [2, 4, 6, 8, 10];
// Crea un nuevo arreglo donde cada número esté multiplicado por 2.
// Salida esperada:
// [4, 8, 12, 16, 20]

const numeros = [2.5, 6, 3.3, 5, 10, 2, 4, 6, 8, 10];// definimos el array con los números que vamos a duplicar

dobles = numeros.map(num=>num*2);// creamos el arreglo usando map y un arrow

console.log(dobles)// imprimimos el nuevo arreglo

// map transforma cada elemento del array por medio del arrow