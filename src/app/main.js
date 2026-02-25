"use strict";

let magnitud = "temperatura";
let unidadmedida ="°F";
let cantidad = Number("-40");

let longitud = [ 
    // unidades de longitud 
    { valor:0.01,unidad: "centimetros", simbolo: "cm",equivalencia:100},
    { valor:1,unidad: "metros", simbolo: "m",equivalencia:1},
    { valor:1000,unidad: "kilometros", simbolo: "km",equivalencia:0.001},
];
let temperatura = [    
    // unidades de temperatura 
    { valor:32,unidad: "grados farenheit", simbolo:"°F",equivalencia:(1 * 9/5) + 32},
    { valor:0,unidad: "grados centigrados", simbolo:"°C",equivalencia:1       },
    { valor:0,unidad: "grados celcius", simbolo: "°C",equivalencia:1 },
    { valor:-273.15,unidad: "kelvin", simbolo: "K",equivalencia:274.15},
];    
let masa = [    
    // unidades de masa 
    { valor:1000,unidad: "gramos", simbolo: "g",equivalencia:1000},
    { valor:1,unidad: "kilogramos", simbolo: "kg",equivalencia:1},
    { valor:0.001,unidad: "toneladas", simbolo: "ton",equivalencia:0.001},
];



function validarmagnitud(magnitud){
if ( magnitud === "temperatura" || magnitud === "masa" ||magnitud === "longitud"
){   return `muy bien, convertiremos ${magnitud}`;
}
else if (magnitud == 0){
    return`no ingresaste magnitud`;
} 
else { 
    return `error: ${magnitud} no es compatible`;
}
}


function validarunidad(unidadmedida) {
if (unidadmedida == 0){
    return `no ingresaste unidad de medida`;
} 
else if (magnitud === "longitud") {   
    const validarunidad = longitud.some(longitud => longitud.unidad === unidadmedida|| longitud.simbolo === unidadmedida);
    if (validarunidad === true){
        return`bien, la unidad que elegiste son ${unidadmedida}`;
}
    else {
        return`error: ${unidadmedida} no es compatible`;
}
}
else if (magnitud === "temperatura") {
       const validarunidad = temperatura.some(temperatura => temperatura.unidad === unidadmedida|| temperatura.simbolo === unidadmedida);
    if (validarunidad === true){
        return`bien, la unidad que elegiste son ${unidadmedida}`;
}
    else {
        return`error: ${unidadmedida} no es compatible`;
}
}
else if (magnitud === "masa") {
       const validarunidad = masa.some(masa => masa.unidad === unidadmedida|| masa.simbolo === unidadmedida);
    if (validarunidad === true){
        return`bien, la unidad que elegiste son ${unidadmedida}`;
    } 
    else {
        return`error: ${unidadmedida} no es compatible`;
}
}
else {
    return`error: unidades no compatibles`
}
}

function validarcantidad(cantidad){
if (Number.isFinite(cantidad)  &&( magnitud === "temperatura"|| magnitud === "longitud"|| magnitud === "masa")){
    return `${cantidad} ${unidadmedida} equivalen a:`
}
else if (!Number(cantidad)){
    return `error: ${cantidad} no es un número`;
}
else if  (!Number.isFinite(cantidad)){
    return `error: ${cantidad} no es finito`;
}
else if (cantidad<0 &&( magnitud === "longitud"|| magnitud === "masa")){
    return `error: no hay ${magnitud} negativas`
}
}

function conversion(cantidad){
if(magnitud === "temperatura" && (unidadmedida === "grados celcius"|| unidadmedida ==="°C"||unidadmedida === "grados centigrados")){
    temperatura = [ 
    // unidades de temperatura 
    { valor:cantidad,unidad: "grados celcius", simbolo: "°C",equivalencia:1},
    { valor:(cantidad* 9/5) + 32,unidad: "grados farenheit", simbolo: "°F",equivalencia:(1* 9/5) + 32},
    { valor:cantidad+273.15,unidad: "kelvin", simbolo: "K",equivalencia:274.15}]
    console.table(temperatura)
}
else if(magnitud === "temperatura" && (unidadmedida === "grados farenheit"|| unidadmedida ==="°F")){
    temperatura = [ 
    // unidades de temperatura
    { valor:cantidad,unidad: "grados farenheit",simbolo: "°F",equivalencia:1},
    { valor:(cantidad-32)*(5/9),unidad: "grados celcius/centigrados", simbolo: "°C",equivalencia:(1-32)*(5/9)},
    { valor:(1-32)*(5/9)+ 273.15,unidad: "kelvin", simbolo: "K",equivalencia:(1-32)*(5/9)+ 273.15}]
    console.table(temperatura)
}
else if(magnitud === "temperatura" && (unidadmedida ==="kelvin"|| unidadmedida ==="K")){
    temperatura = [ 
    // unidades de temperatura
    { valor:cantidad,unidad: "kelvin", simbolo: "K",equivalencia:1},
    { valor:cantidad-273.15,unidad: "grados celcius", simbolo: "°C",equivalencia:-272.15},
    { valor:(cantidad-273.15)*(9/5)+ 32,unidad: "grados farenheit", simbolo: "°F",equivalencia:(1-273.15)*(9/5)+ 32}]
    console.table(temperatura)
}
else if (magnitud === "longitud" && (unidadmedida ==="metros"|| unidadmedida ==="m")){
longitud = [ 
    // unidades de longitud 
    { valor:cantidad,unidad: "metros", simbolo: "m",equivalencia:1},
    { valor:100*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100},
    { valor:0.001*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.001}]
    console.table(longitud)
}
else if(magnitud === "longitud" && (unidadmedida ==="kilometros"|| unidadmedida ==="km")){
    longitud = [ 
    // unidades de longitud 
    { valor:cantidad,unidad: "kilometros", simbolo: "km",equivalencia:1},
    { valor:1000*cantidad,unidad: "metros", simbolo: "m",equivalencia:1000},
    { valor:100000*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100000}]
    console.table(longitud)
}
else if(magnitud === "longitud" && (unidadmedida ==="centimetros"|| unidadmedida ==="cm")){
    longitud = [ 
    // unidades de longitud 
    { valor:cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:1},
    { valor:0.01*cantidad,unidad: "metros", simbolo: "m",equivalencia:0.01},
    { valor:0.00001*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.00001}]
    console.table(longitud)
}
else if(magnitud === "masa" &&(unidadmedida ==="kilogramos"|| unidadmedida ==="kg")){
    masa = [ 
    // unidades de masa
    { valor:cantidad,unidad: "kilogramos", simbolo: "kg",equivalencia:1},
    { valor:1000*cantidad,unidad: "gramos", simbolo: "g",equivalencia:1000},
    { valor:0.001*cantidad,unidad: "toneladas", simbolo: "ton",equivalencia:0.001}]
    console.table(masa)
}
else if(magnitud === "masa" && cantidad>0 && (unidadmedida ==="tonelada"|| unidadmedida ==="ton")){
    masa = [ 
    // unidades de masa 
    { valor:cantidad,unidad: "toneladas", simbolo: "ton",equivalencia:1},
    { valor:1000*cantidad,unidad: "kilogramos", simbolo: "kg",equivalencia:1000},
    { valor:1000000*cantidad,unidad: "gramos", simbolo: "g",equivalencia:1000000}]
    console.table(masa)
}
else if(magnitud === "masa" && cantidad>0 && (unidadmedida ==="gramos"|| unidadmedida ==="g")){
    masa = [ 
    // unidades de masa 
    { valor:cantidad,unidad: "gramos", simbolo: "g",equivalencia:1},
    { valor:0.001*cantidad,unidad: "kilogramos", simbolo: "kg",equivalencia:0.001},
    { valor:0.000001*cantidad,unidad: "toneladas", simbolo: "ton",equivalencia:0.000001}]
    console.table(masa)
}
else {
    return `error: algo salió mal`
}
}


console.log("vamos a convertir unidades")
console.log("comencemos por la magnitud")
console.log("elige una magnitud(temperatura, longitud, masa)")

console.log(validarmagnitud(magnitud)) //ingresamos la magnitud y la validamos con la función validarmagnitud
console.log("ahora dame la unidad")
console.log(validarunidad(unidadmedida)) //ingresamos la unidad y la validadmos con la función validarunidad
console.log("Dime el valor o cantidad de ",unidadmedida)
console.log(validarcantidad(cantidad))
conversion(cantidad)
