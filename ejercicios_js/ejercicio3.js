// 3. Obtener longitudes de palabras con map
// Objetivo: usar map con strings.
// const palabras = ["sol", "computador", "mesa", "javascript"];
// Genera un arreglo con la longitud de cada palabra.
// Ejemplo esperado:
// [3, 10, 4, 10]

const palabras = ["sol", "computador", "mesa", "javascript","aguacate","","python"];

const longitudPalabras = palabras.map(pal=>pal.length);//map recorre cada elemento y lenght calcula su longitud

console.log(longitudPalabras);//se imrpime en nuevo array con la longitud

// map pasa elemento por elemento y el método lenght me permite saber el número de letras que tiene cada palabra
