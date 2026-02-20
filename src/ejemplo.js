// ejemplo 1
console.log("ejemplo 1"); //indica número de ejemplo

// imprimir valores 
console.log(1);
console.log(1+1);
console.log((1+1)/2);
console.log(2*3);
console.log(2**0);

// ejemplo 2
console.log("ejemplo 2");//indica número de ejemplo

const s= 'hola a todos';// asignar valores
console.log(s);//imprimir valores

// ejemplo 3
console.log("ejemplo 3");//indica número de ejemplo

let x = 10;//asignar valor

console.log(x+10);//operación
//coerción implícita
console.log("x"+10);
console.log(x-"10");
console.log(x=="10");
// ejemplo 4
console.log("ejemplo 4");//indica número de ejemplo

let input = "5";
m = Number(input);//coerción explícita

console.log((m+5)/2);   //operación con variable asignada

m = 7;                  //cambio de valor de variable
console.log((m+5)/2);   //operación con variable reasignada

// ejemplo 5
console.log("ejemplo 5");//indica número de ejemplo

const obj = { name:"gabriel",lastname:"rodríguez"}; //asignación de valor a objeto
console.log(obj.name," ",obj.lastname);     //impresión de objeto 

obj.name = "francisco";             //modifica una propiedad del objeto
console.log(obj.name+" "+obj.lastname); //impresión del objeto y ejemplo de concatenación

// ejemplo 6
console.log("ejemplo 6");//indica número de ejemplo
 
let a = "7";
let b = 7;

console.log(7==a);      //coerción implícita
console.log(7===a);     //comparación con tipo en cuenta

console.log(7==b);      //comparación sin tipo en cuenta
console.log(7===b);     //comparación con tipo en cuenta

// ejemplo 7
console.log("ejemplo 7");//indica número de ejemplo
 
console.log(typeof input);  //string
console.log(typeof m);      //number
console.log(typeof obj)     //object
console.log(typeof a);      //string
console.log(typeof b);      //number

// ejemplo 8
console.log("ejemplo 8");//indica número de ejemplo
 
let y = 1                           //asignación de variable

demo();                             //llamada de la función


function demo() {                   //función demo
    
    if(y === 1) {                   //condicional if
        const saludo = "hola a todos";
        
    console.log(saludo);
    }
    else {                          //condicional else
        const despedida = "adiós a todos"
    console.log(despedida);}
}

y = 0                               //reasignación de variable

demo();                             //llamamos nuevamente la función

// ejemplo 9
console.log("ejemplo 9");//indica número de ejemplo

console.log("hacer click")
let derecho = true
let izquierdo = false

if (derecho && izquierdo === true) {    //if con operador lógico and
console.log("hiciste dos clicks")
}
else {
    console.log("no hiciste dos clicks")
}

if (derecho || izquierdo === true) {    //if con operador lógico or
console.log("hiciste al menos un click")
}
else {
    console.log("no hiciste click")
}

// ejemplo 10
console.log("ejemplo 10");//indica número de ejemplo
 
const dni = null
const k = "NN";

console.log( dni ?? k); //uso de Nullish coalescing

