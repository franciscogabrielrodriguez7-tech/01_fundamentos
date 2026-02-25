"use strict";

let magnitud = "longitud"
let unidadmedida = "km"
let cantidad = Number("9")

let longitud = [ 
    // unidades de longitud 
    { valor:0.1*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100},
    { valor:1*cantidad,unidad: "metros", simbolo: "m",equivalencia:1},
    { valor:1000*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.001},
];
let temperatura = [    
    // unidades de temperatura 
    { valor:32,unidad: "grados farenheit", simbolo:"°f",equivalencia:(cantidad* 9/5) + 32},
    { valor:0,unidad: "grados centigrados", simbolo:"°c",equivalencia:cantidad},
    { valor:0,unidad: "grados celcius", simbolo: "°c",equivalencia:cantidad},
    { valor:-273.15,unidad: "kelvin", simbolo: "k",equivalencia:cantidad-273.15},
];    
let masa = [    
    // unidades de masa 
    { valor:1000,unidad: "gramos", simbolo: "g",equivalencia:1000},
    { valor:1,unidad: "kilogramos", simbolo: "kg",equivalencia:1},
    { valor:1000,unidad: "toneladas", simbolo: "ton",equivalencia:0.001},
];



function validarmagnitud(magnitud){
if ( magnitud === "temperatura" || magnitud === "masa" ||magnitud === "longitud"
){   return `muy bien, convertiremos ${magnitud}`;
}
else if (magnitud == 0){
    return `no ingresaste magnitud`;
} 
else { 
    return `error: ${magnitud} no es compatible`;
}
}


function validarunidad(unidadmedida) {
if (magnitud == 0){
    return `no ingresaste magnitud`;
} 
else if (magnitud === "longitud") {   
    const validarunidad = longitud.some(longitud => longitud.unidad === unidadmedida|| longitud.simbolo === unidadmedida);
    if (validarunidad === true){
        return`bien, la unidad que elegiste son ${unidadmedida}`;
}
else if (unidadmedida == 0){
    return `no ingresaste unidad de medida`;
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
else if (unidadmedida == 0){
    return `no ingresaste unidad de medida`;
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
else if (unidadmedida == 0){
    return `no ingresaste unidad de medida`;
} 
    else {
        return`error: ${unidadmedida} no es compatible`;
}
}
else {
    return`error: las unidades no son compatibles con la magnitud`
}
}
function conversion(cantidad){
if (magnitud === "longitud" && (unidadmedida ==="metros"|| unidadmedida ==="m")){
    console.table(longitud)
longitud = [ 
    // unidades de longitud 
    { valor:0.1*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100},
    { valor:1*cantidad,unidad: "metros", simbolo: "m",equivalencia:1},
    { valor:1000*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.001}]
}
else if(magnitud === "longitud" && (unidadmedida ==="kilometros"|| unidadmedida ==="km")){
    console.table(longitud)
 longitud = [ 
    // unidades de longitud 
    { valor:0.00001*cantidad,unidad: "centimetros", simbolo: "cm",equivalencia:100},
    { valor:0.001*cantidad,unidad: "metros", simbolo: "m",equivalencia:1},
    { valor:1*cantidad,unidad: "kilometros", simbolo: "km",equivalencia:0.001}]
}
else if(magnitud === "longitud" && (unidadmedida ==="kilometros"|| unidadmedida ==="km")){
    console.table(longitud)
}
}


console.log("vamos a convertir unidades")
console.log("comencemos por la magnitud")
console.log("elige una magnitud(temperatura, longitud, masa)")

console.log(validarmagnitud(magnitud)) //ingresamos la magnitud y la validamos con la función validarmagnitud
console.log("ahora dame la unidad")
console.log(validarunidad(unidadmedida)) //ingresamos la unidad y la validadmos con la función validarunidad
console.log("Dime el valor o cantidad de ",unidadmedida)
console.log(`la conversión de esos ${cantidad} ${unidadmedida} es:`)
console.log(conversion())