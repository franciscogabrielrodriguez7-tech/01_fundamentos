"use strict";//impone reglas más rigurosas para escribir código más seguro, limpio y eficiente.
// if:
// .some:
// return:
// .table:

let magnitud = "longitud";   //asignamos la variable magnitud
let unidadmedida ="cm";         //asignamos la variable de tipo de unidad de medida
let cantidad = Number("100");   //asignamos la variable de cantidad de unidades

let longitud = [                // unidades de longitud 
    { valor:0.01,unidad: "centimetros", simbolo: "cm",equivalencia:100},    //unidades para la conversión
    { valor:1,unidad: "metros", simbolo: "m",equivalencia:1},               //unidades para la conversión
    { valor:1000,unidad: "kilometros", simbolo: "km", equivalencia:0.001},   //unidades para la conversión
];
let temperatura = [             // unidades de temperatura 
    { valor:32,unidad: "grados farenheit", simbolo:"°F",equivalencia:(1 * 9/5) + 32},//unidades para la conversión
    { valor:0,unidad: "grados centigrados", simbolo:"°C",equivalencia:1 },  //unidades para la conversión
    { valor:0,unidad: "grados celcius", simbolo: "°C",equivalencia:1 },     //unidades para la conversión
    { valor:-273.15,unidad: "kelvin", simbolo: "K",equivalencia:274.15},    //unidades para la conversión
];    
let masa = [                    // unidades de masa 
    { valor:1000,unidad: "gramos", simbolo: "g",equivalencia:1000},         //unidades para la conversión
    { valor:1,unidad: "kilogramos", simbolo: "kg",equivalencia:1},          //unidades para la conversión
    { valor:0.001,unidad: "toneladas", simbolo: "ton",equivalencia:0.001},  //unidades para la conversión
];



function validarmagnitud(magnitud){ //función para validar la magnitud
if ( magnitud === "temperatura" || magnitud === "masa" ||magnitud === "longitud")
{  console.log(`muy bien, convertiremos ${magnitud}`);// corre cuando la maagnitud coincide
    return validarunidad(unidadmedida) 
}
else if (magnitud == 0){
    console.log(`no ingresaste magnitud`);// corre cuando no se ingresa magnitud
    return
} 
else { 
    console.log(`error: ${magnitud} no es compatible`);// corre cuando la magnitud no coincide 
    return `error: ${magnitud} no es compatible`;// corre cuando la magnitud no coincide 
}
}
// la función anterior valida la magnitud por medio de los condicionales if, else if, else 

function validarunidad(unidadmedida) {//función para validar la unidad de medida
console.log("ahora dame las unidades");
if (unidadmedida == 0){
    console.log(`no ingresaste unidad de medida`); // corre cuando no se ingresa una unidad de medida
    return 
} 
else if (magnitud === "longitud") {  
    const validarunidad = longitud.some(longitud => longitud.unidad === unidadmedida|| longitud.simbolo === unidadmedida);
    if (validarunidad === true){
        console.log(`bien, la unidad que elegiste son ${unidadmedida}`);// corre si la magnitud es longitud y la unidad coincide con alguno de los elementos del array longitud
        return validarcantidad(cantidad)  
}
    else {
        console.log(`error: ${unidadmedida} no es compatible`); // corre si la magnitud es longitud pero la unidad no coincide
        return;
}
}
else if (magnitud === "temperatura") {
       const validarunidad = temperatura.some(temperatura => temperatura.unidad === unidadmedida|| temperatura.simbolo === unidadmedida);
    if (validarunidad === true){
        `bien, la unidad que elegiste son ${unidadmedida}`;// corre si la magnitud es temperatura y las unidades coinciden con alguno de los elementos del array temperatura
        return validarcantidad(cantidad) 
}
    else {
        return`error: ${unidadmedida} no es compatible`;// corre si la magnitud es temperatura pero las unidades no coinciden 
}
}
else if (magnitud === "masa") {
       const validarunidad = masa.some(masa => masa.unidad === unidadmedida|| masa.simbolo === unidadmedida);
    if (validarunidad === true){
        `bien, la unidad que elegiste son ${unidadmedida}`;// corre si la magnitud es masa y la unidad coincide con alguno de los elementos del array masa
        return validarcantidad(cantidad) 
} 
    else {
        return`error: ${unidadmedida} no es compatible`;// corre si la magnitud es masa pero las unidades no coinciden 
}
}
else {
    
    return`error: magnitud no compatible`;//corre si la magnitud 
}
}
// la función anterior valida la unidad de medida por medio de los condicionales if, else if, else

function validarcantidad(cantidad){     // función para validar la cantidad de unidades 
console.log(`ahora dame la cantidad o valor`)
if (Number.isFinite(cantidad)  &&( magnitud === "temperatura"|| magnitud === "longitud"|| magnitud === "masa")){
    console.log(`${cantidad} ${unidadmedida} equivalen a:`)
    return conversion(cantidad)
}
else if(cantidad != Number(cantidad)){
    console.log(`el sistema no soporta texto, por favor ingrese números`)
    return 
}
else if (!Number(cantidad)){
    console.log (`error: ${cantidad} no es un número`);//corre si la cantidad no es un número
    return 
}
else if  (!Number.isFinite(cantidad)){
    console.log (`error: ${cantidad} no es finito`);//corre si la cantidad no es finita
    return 
}
else if (cantidad<0 &&( magnitud === "longitud"|| magnitud === "masa")){
    console.log (`error: no hay ${magnitud} negativas`);//corre si la masa o la longitud son negativas
    return 
}
}
// la función anterior valida la cantidad por medio de los condicionales if, else if, else

function conversion(cantidad){          // función para convertir las unidades y hacer una tabla de ellas 

// comparación y conversión de las unidades de temperatura 
if(magnitud === "temperatura" && (unidadmedida === "grados celcius"|| unidadmedida ==="°C"||unidadmedida === "grados centigrados"|| unidadmedida==="CENTIGRADOS"|| unidadmedida==="GRADOS CELCIUS"|| unidadmedida==="GRADOS CENTIGRADOS"|| unidadmedida ==="CENTIGRADOS")){//validación de las unidades
    temperatura = [ 
    // unidades de temperatura 
    { valor:cantidad,unidad: "grados celcius", simbolo: "°C",equivalencia:1},
    { valor:(cantidad* 9/5) + 32,unidad: "grados farenheit", simbolo: "°F",equivalencia:(1* 9/5) + 32},
    { valor:cantidad+273.15,unidad: "kelvin", simbolo: "K",equivalencia:274.15}]
    console.table(temperatura) //imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "temperatura" && (unidadmedida === "grados farenheit"|| unidadmedida ==="°F"|| unidadmedida==="FARENHEIT"|| unidadmedida==="GRADOS FARENHEIT")){//validación de las unidades
    temperatura = [ 
    // unidades de temperatura
    { valor:cantidad,unidad: "grados farenheit",simbolo: "°F",equivalencia:1},
    { valor:(cantidad-32)*(5/9),unidad: "grados celcius/centigrados", simbolo: "°C",equivalencia:(1-32)*(5/9)},
    { valor:(1-32)*(5/9)+ 273.15,unidad: "kelvin", simbolo: "K",equivalencia:(1-32)*(5/9)+ 273.15}]
    console.table(temperatura)//imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "temperatura" && (unidadmedida ==="kelvin"|| unidadmedida ==="K"|| unidadmedida==="k"|| unidadmedida ==="KELVIN")){
    temperatura = [ 
    // unidades de temperatura
    { valor:cantidad,unidad: "kelvin", simbolo: "K",equivalencia:1},
    { valor:cantidad-273.15,unidad: "grados celcius", simbolo: "°C",equivalencia:-272.15},
    { valor:(cantidad-273.15)*(9/5)+ 32,unidad: "grados farenheit", simbolo: "°F",equivalencia:(1-273.15)*(9/5)+ 32}]
    console.table(temperatura)//imprime una tabla con las unidades y sus respectivos valores
}
else if (magnitud === "longitud" && (unidadmedida ==="metros"|| unidadmedida ==="m"|| unidadmedida==="M")){
longitud = [ 
    // unidades de longitud 
    { valor:cantidad,unidad: "metros", simbolo: "m",equivalencia:1},
    { valor:100*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100},
    { valor:0.001*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.001}]
    console.table(longitud)//imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "longitud" && (unidadmedida ==="kilometros"|| unidadmedida ==="km"|| unidadmedida=== "KM")){
    longitud = [ 
    // unidades de longitud 
    { valor:cantidad,unidad: "kilometros", simbolo: "km",equivalencia:1},
    { valor:1000*cantidad,unidad: "metros", simbolo: "m",equivalencia:1000},
    { valor:100000*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100000}]
    console.table(longitud)//imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "longitud" && (unidadmedida ==="centimetros"|| unidadmedida ==="cm" || unidadmedida ==="CM")){
    longitud = [ 
    // unidades de longitud 
    { valor:cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:1},
    { valor:0.01*cantidad,unidad: "metros", simbolo: "m",equivalencia:0.01},
    { valor:0.00001*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.00001}]
    console.table(longitud)//imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "masa" &&(unidadmedida ==="kilogramos"|| unidadmedida ==="kg")){
    masa = [ 
    // unidades de masa
    { valor:cantidad,unidad: "kilogramos", simbolo: "kg",equivalencia:1},
    { valor:1000*cantidad,unidad: "gramos", simbolo: "g",equivalencia:1000},
    { valor:0.001*cantidad,unidad: "toneladas", simbolo: "ton",equivalencia:0.001}]
    console.table(masa)//imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "masa" && cantidad>0 && (unidadmedida ==="tonelada"|| unidadmedida ==="ton")){
    masa = [ 
    // unidades de masa 
    { valor:cantidad,unidad: "toneladas", simbolo: "ton",equivalencia:1},
    { valor:1000*cantidad,unidad: "kilogramos", simbolo: "kg",equivalencia:1000},
    { valor:1000000*cantidad,unidad: "gramos", simbolo: "g",equivalencia:1000000}]
    console.table(masa)//imprime una tabla con las unidades y sus respectivos valores
}
else if(magnitud === "masa" && cantidad>0 && (unidadmedida ==="gramos"|| unidadmedida ==="g")){
    masa = [ 
    // unidades de masa 
    { valor:cantidad,unidad: "gramos", simbolo: "g",equivalencia:1},
    { valor:0.001*cantidad,unidad: "kilogramos", simbolo: "kg",equivalencia:0.001},
    { valor:0.000001*cantidad,unidad: "toneladas", simbolo: "ton",equivalencia:0.000001}]
    console.table(masa)//imprime una tabla con las unidades y sus respectivos valores
}
else {
    return `error: algo salió mal`
}
}


console.log("vamos a convertir unidades")
console.log("comencemos por la magnitud")
console.log("elige una magnitud(temperatura, longitud, masa)")

validarmagnitud(magnitud) //ingresamos la magnitud y la validamos con la función validarmagnitud

