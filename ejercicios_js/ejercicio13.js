// 13. Ordenar productos por precio con sort 
// Objetivo: ordenar objetos. 
// const productos = [ 
//  { nombre: "Teclado", precio: 120000 }, 
//  { nombre: "Mouse", precio: 50000 }, 
//  { nombre: "Monitor", precio: 800000 }, 
//  { nombre: "USB", precio: 30000 } 
// ]; 
// Ordénalos del más barato al más caro.

const productos = [ 
 { nombre: "Teclado", precio: 120000 }, 
 { nombre: "Mouse", precio: 50000 }, 
 { nombre: "Monitor", precio: 800000 }, 
 { nombre: "USB", precio: 30000 } 
]; 

const ordenPrecio = [...productos].sort((a,b)=> a.precio - b.precio);//se ordenan los productos por precio del más barato al más caro 

console.log(ordenPrecio);