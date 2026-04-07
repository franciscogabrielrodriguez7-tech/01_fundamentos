// 9. Contar total de letras con reduce 
// Objetivo: usar reduce con strings. 
// const palabras = ["hola", "mundo", "js"]; 
// Calcula cuántas letras hay en total sumando la longitud de cada palabra.

const palabras = ["hola", "mundo", "js"]; //tenemos el array base
const letrasTotales = palabras.reduce((acumulador,pal)=> acumulador + pal.length,0);//se suman las longitudes de las palabras y eso nos dará el total de letras 
console.log(letrasTotales);//imprime el total de letras
// reduce nos permite sumar las longitudes de cada palabra en una sola variable 