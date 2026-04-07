// 5. Filtrar palabras largas con filter 
// Objetivo: filtrar textos según su tamaño. 
// const palabras = ["casa", "ventana", "sol", "computadora", "luz"]; 
// Obtén solo las palabras que tengan más de 5 letras.

const palabras = ["casa", "ventana", "sol", "computadora", "luz", "espagetti", "esternocleidomastoideo"];//tenemos el conjunto de palabras 
const palabrasLargas = palabras.filter(palabra=>palabra.length>5);//uso de filter para filtrar las palabras con más de 5 letras
console.log(palabrasLargas);//impresión del nuevo arreglo con las palabras con más de 5 letras

// se usa filter para crrear un array con elementos de otro array que cumplen con ciertas características o condiciones