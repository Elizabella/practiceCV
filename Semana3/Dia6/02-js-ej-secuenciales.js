/**
 * 1. Algoritmo para sumar 4 notas
 * e imprimir el promedio de los 4
 */
/**
 * typeof
 */
let c1=0,c2=0,c3=0,c4=0, promedio=0, suma=0;
console.log(typeof c1);
/**
 * Ojo: Anteponer el simbolo "+" a una instruccion o variable la 
 * convierte automaticamente en un numero
 */
c1=+prompt("Ingrese la primera nota");
c2=+prompt("Ingrese la primera nota");
c3=+prompt("Ingrese la primera nota");
c4=+prompt("Ingrese la primera nota");
//¿como mostrar el tipo de dato de una variable?
console.log(typeof c1);
// console.log(c1);
suma= c1+c2+c3+c4;
promedio= suma/4;
/**
 * El uso  de los backticks (') nos ayudan a concatenar 
 * variables con strings en una sola linea sin el uso del operador(+)
 */
console.log("El promedio es: " + promedio);
console.log('El promedio es:  ${promedio}');
