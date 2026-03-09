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
// 1 agregar apellido a un grupo de integrantes
const apellido = " Rodriguez"
const integrantes =["Gabriel","Andres","Mariana"]
const familia = integrantes.map(function(integrantes){
return{
familia: integrantes + apellido
}
})
console.log(integrantes)
console.log(familia)
// 2 ver caracteristica de un producto
const producto = [
{tipo:"fruta", nombre:"pera"}, 
{tipo:"fruta", nombre:"manzana"},
{tipo:"verdura", nombre:"zanahoria"} 
]
const tipo =producto.map(({tipo})=>tipo);

console.log(tipo)
// 3 imprimir nota de alumnos aprobados
const alumnos = [
{nota:56, nombre:"Pepito"}, 
{nota:56, nombre:"Marcos"},
{nota:40, nombre:"Juan"} 
]
const aprobados = alumnos.map(function(alumnos){
if(alumnos.nota>=50)
  return `${alumnos.nombre} aprobó con: ${alumnos.nota}`;
else if (alumnos.nota<50)
  return `${alumnos.nombre} reprobó con: ${alumnos.nota}`;
})
console.log(aprobados) 
// 4 claisificar mayor o menor de edad
const edad = [
{edad:26, nombre:"Pepito"}, 
{edad:16, nombre:"Marcos"},
{edad:19, nombre:"Juan"} 
]
const adultos= edad.map(function(edad){
if (edad.edad>=18)
  return `${edad.nombre}, eres mayor de edad`
else if (edad.edad<18)
  return `${edad.nombre}, eres menor de edad`
})

console.log(adultos)
// 5 identificar tipos de datos

const datos = [false,"a",4,true] 
const tipoDato =datos.map(datos=>typeof(datos))
console.table(tipoDato)

// filter
// 1 clasificar zapatos por tallas para una tienda
const zapatos =[{marca:"nike",talla:35},
{marca:"jordan",talla:34},
{marca:"jordan",talla:36},
{marca:"jordan",talla:34}
];
const tallaZapatos = zapatos.filter(zapato => zapato.talla === 34);
console.table(tallaZapatos);

// 2 clasificar ropa

const ropa =[{tipo:"camisa",talla:"s"},
{tipo:"zapatos",talla:"37"},
{tipo:"pantalón",talla:"30"},
{tipo:"camisa",talla:"m"}
];
const prendas = ropa.filter(ropa =>(ropa.tipo == "camisa" )||( ropa.tipo == "pantalón"))

console.table(prendas)

// 3 encontrar productos por tipo

const productos =[{tipo:"fruta",nombre:"pera"},
{tipo:"ropa",nombre:"camiseta"},
{tipo:"ropa",nombre:"camisa"},
{tipo:"fruta",nombre:"manzana"}
];
const tipoProducto = productos.filter(producto =>producto.tipo == "fruta" )

console.table(tipoProducto)

// 4 clasificar vendedores con 10 productos o más 

const vendedores =[{np: 2,nombre:"pedro"},
{np: 5,nombre:"eustaquio"},
{np: 10,nombre:"esteban"},
{np: 20,nombre:"pablo"}
];
const masProductos = vendedores.filter(vendedores =>vendedores.np >=10 )

console.table(masProductos)

// 5 clasificar usuarios

const usuarios =[{tUsuario: "vendedor",nombre:"pedro"},
{tUsuario: "cliente",nombre:"eustaquio"},
{tUsuario: "empresa",nombre:"esteban"},
{tUsuario: "cliente",nombre:"pablo"}
];
const clientes =usuarios.filter(({tUsuario})=> tUsuario == "cliente")

console.table(clientes)

// reduce 

// 1 saber el número de productos que tiene cada vendedor

const uVendedores = [{numProductos: 4,nombre:"pedro"},
{numProductos: 7,nombre:"eustaquio"},
{numProductos: 8,nombre:"esteban"},
{numProductos: 4,nombre:"pablo"}
];
const numProduSistema =uVendedores.reduce((acumulador,uVendedores)=> acumulador + uVendedores.numProductos,0)

console.log(numProduSistema)

// 2 contar la cantidad de ingresos a una pagina

const ingresos =["ingreso","cierre de sesión","ingreso","ingreso","cierre de sesión","ingreso"]

const numIngresos=ingresos.reduce((contador,numIngresos)=> {
  if (numIngresos!="ingreso")
  return contador
  if (numIngresos=="ingreso")
  return contador +1
},0)

console.log(numIngresos)