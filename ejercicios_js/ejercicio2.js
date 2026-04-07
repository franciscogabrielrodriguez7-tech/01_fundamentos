// 2. Convertir nombres a mayúsculas con map
// Objetivo: transformar cadenas de texto.
// const nombres = ["ana", "luis", "marta", "pedro"];
// Crea un nuevo arreglo con todos los nombres en mayúsculas. 

const nombres = ["ana", "luis", "marta", "pedro","&","2",];//creamos el array con los nombres 

const nombresMayuscula = nombres.map(nom=> nom.toUpperCase())//usamos map para trasformar cada elemento, y toUpperCase para convertirlo a mayúscua

console.log(nombresMayuscula)//imprimimos nombres en mayuscula

// map selecciona cada elemento del array y el método toUpperCase lo convierte a mayuscula
