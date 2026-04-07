// 12. Ordenar nombres alfabéticamente con sort 
// Objetivo: ordenar texto. 
// const nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"]; 
// Ordénalos alfabéticamente.

let nombres = ["Pedro", "Ana", "Luis", "Carlos", "Marta"]; //tenemos el array base
const ordenadosAlfabeticamente = [...nombres].sort();//se ordenan los nombres alfabéticamente con sort

console.log(ordenadosAlfabeticamente);

nombres = ["Pedro", "ana", "luis", "Carlos", "Marta"];//cambiamos los datos para otra prueba

console.log(nombres.sort());//ordena según assci, por lo que las minúsculas no quedan enn orden alfabetico

const nombresOrdenados = [...nombres].sort((a,b)=> a.localeCompare(b));//se ordenan sin importar mayúsculas o minúsculas con localeCompare

console.log(nombresOrdenados);

// sort permite organizar los elementos y localeCompare permite que se ordenen sin importar mayúsculas o minúsculas, además, el operador de propagación permite hacer un array sin afectar el array original 