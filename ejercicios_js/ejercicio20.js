// 20. Ejercicio integrador: filter + sort + map + reduce 
// Objetivo: integrar varios métodos en un solo problema. 
// const ventas = [ 
//  { producto: "Mouse", cantidad: 3, precio: 50000 }, 
//  { producto: "Teclado", cantidad: 2, precio: 120000 }, 
//  { producto: "Monitor", cantidad: 1, precio: 800000 }, 
//  { producto: "USB", cantidad: 5, precio: 30000 } 
// ]; 
// Realiza lo siguiente: 
// 1. Filtra los productos cuya cantidad sea mayor o igual a 2. 
// 2. Ordénalos de mayor a menor según el precio. 
// 3. Crea un nuevo arreglo con frases como: 
// "Teclado - Total: 240000" 
// 4. Calcula con reduce el valor total de todas las ventas.

const ventas = [ 
 { producto: "Mouse", cantidad: 3, precio: 50000 }, 
 { producto: "Teclado", cantidad: 2, precio: 120000 }, 
 { producto: "Monitor", cantidad: 1, precio: 800000 }, 
 { producto: "USB", cantidad: 5, precio: 30000 } 
]; 

const productos = [...ventas]  //definimos el array donde pondremos los productos ordenados y filtrados
.filter(venta => venta.cantidad >= 2)//filtramos los productos cuya cantidad es mayor a 1
.sort((a,b)=> b.precio-a.precio)//ordenamos de mayor a menor precio
const valorPorProducto = productos.map(venta => `${venta.producto} - Total: ${venta.cantidad * venta.precio}`);// creamos un array y con map imprimimos cada frase del total calculando el total
const ventaTotal = productos.reduce((acum,venta)=> acum + venta.cantidad * venta.precio,0);// con reduce calculamos el valor total de la compra 

console.log(productos);
console.log(valorPorProducto);
console.log(`Valor total: ${ventaTotal}`);
// imprimimos cada arreglo 
