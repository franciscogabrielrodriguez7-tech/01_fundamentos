// 18. Sumar números hasta llegar a 100 con while
// Objetivo: repetir hasta cumplir condición.
// Crea un programa que vaya sumando números consecutivos comenzando en 1 hasta que la suma
// sea mayor o igual a 100.
// Debes mostrar:
// cada número sumado
// la suma final
// cuántos números fueron necesarios

let numero = 1;
let suma = 0;

while (suma < 100) {
  console.log(`número: ${numero}`);
  suma += numero;
  if (suma >= 100) {
    console.log(`suma = ${suma}`);
    console.log(`números necesarios: ${numero}`);
  }
  numero++;
}
