// formas de declarar funciones en javascript

function sumar(a, b) {
  return a + b;
}

console.log(sumar(5, 3)); // Imprime 8

const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Imprime 15

const clamp = (num, min, max) => {
  return Math.min(Math.max(num, min), max); // clamp a un rango entre min y max
};
console.log(clamp(10, 0, 5)); // Imprime 5 (clamp a 5)

// Parametros por defecto, rest y guard clauses

function greet(name = "Invitado") {
  if (!name.trim())
    // trim elimina espacios en blanco al inicio y al final de la cadena
    return "Hola, Invitado!";
  return `Hola, ${name}!`;
}

console.log(greet()); // Imprime "Hola, Invitado!"
console.log(greet("Alice"));

// Arrays y metodos claves

const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map((num) => num * 2); // map crea un nuevo array con los resultados de la función aplicada a cada elemento
console.log(cuadrados); // Imprime [1, 4, 9, 16, 25]

const expenses = [
  { amount: 50, category: "food" },
  { amount: 20, category: "transport" },
  { amount: 30, category: "food" },
];
// filter 

const foodExpenses = expenses.filter((expense) => expense.category === "food"); 
// filter crea un nuevo array con los elementos que cumplen la condición
console.log(foodExpenses); // Imprime [{ amount: 50, category: "food" }, { amount: 30, category: "food" }]

const totalFoodExpense = foodExpenses.reduce((total, expense) => total + expense.amount, 0);
// reduce acumula un valor a través de los elementos del array, en este caso sumando los montos de los gastos de comida
console.log(totalFoodExpense); // Imprime 80



// ejercicios
// map
// duplicar el precio a todos los productos
const producto = [{nombre:"mesa",precio:5000},{nombre:"pera",precio:4300}]
const precios = producto.map((precio) => ...producto,producto.precio: precio*2)
console.log(precios)
// aumentar la talla a un grupo de zapatillas cuando la persona crece
const zapatillas =[{talla: 35},{talla:34},{talla:36},{talla:34}];
const zapatillasgrandes = zapatillas.map((num) => num + 1);

// clasificar zapatos por tallas para una tienda
const zapatos =[{marca:"nike",talla:35},{marca:"jordan",talla:34},{marca:"jordan",talla:36},{marca:"jordan",talla:34}];
const tallazapatos = zapatos.filter((zapato) => zapato.talla === 34);
console.log(tallazapatos);