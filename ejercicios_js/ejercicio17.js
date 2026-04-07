// 17. Contar del 10 al 1 con while
// Objetivo: practicar decremento.
// Usa while para mostrar una cuenta regresiva desde 10 hasta 1.
// Al final imprime:
// "¡Despegue!"

let cont = 10;

while (cont >= 1) {
  console.log(cont);
  if (cont === 1) {
    console.log("¡Despegue!");
  }
  cont--;
}
