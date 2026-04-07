// 6. Filtrar estudiantes aprobados con filter 
// Objetivo: aplicar condiciones sobre objetos. 
// const estudiantes = [ 
//  { nombre: "Ana", nota: 4.5 }, 
//  { nombre: "Luis", nota: 2.8 }, 
//  { nombre: "Marta", nota: 3.7 }, 
//  { nombre: "Carlos", nota: 2.5 } 
// ]; 
// Obtén un nuevo arreglo con los estudiantes cuya nota sea mayor o igual a 3.0.

const estudiantes = [ 
 { nombre: "Ana", nota: 4.5 }, 
 { nombre: "Luis", nota: 2.8 }, 
 { nombre: "Marta", nota: 3.7 }, 
 { nombre: "Carlos", nota: 2.5 } 
]; 
const aprobados = estudiantes.filter(estudiante=>estudiante.nota>=3.0);//se crea un array con la condicion de aprobado
console.log(aprobados);//imprime el nuevo array

// se usa filter para filtrar los estudiantes aprobados por medio de una comparación