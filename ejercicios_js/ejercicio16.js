// 16. Tabla del 5 con while 
// Objetivo: repetir instrucciones con contador. 
// Usa un ciclo while para imprimir la tabla del 5 desde: 
// 5 x 1 = 5 
// hasta: 
// 5 x 10 = 50

const numero = 5;
let cont = 0;

while (cont <= 10){
    console.log(`${numero} * ${cont} = ${numero * cont}`);
    cont++; 
}