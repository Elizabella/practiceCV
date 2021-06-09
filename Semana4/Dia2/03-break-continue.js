/**
 * SENTENCIA BREAK VS CONTINUE
 * BREAK => INTERRUMPIR TODAS LAS ITERACIONES QUE QUEDAN
 * POR DARSE EN UNA ESTRUCTURA REPETITIVA
 * continue => interrumpir la iteracion actual, y salta
 * automaticamente a la 
 */
let numeros=[3, 545, 3, -5, 34, 90, 2, 90, 0];
/**
 * Ejercicio: imprimir los numeros hasta encontrar un numero negativo
 */
for(let i=0; i<numeros.length; i++){
    if(numeros[i]>=0){
        console.log(numeros[i]);
    }else{
        break;
    }
}
/**
 * Ejercicio: si un numero es impar imprimirlo, y en caso
 * contrario saltar a la siguiente iteracion
 */
