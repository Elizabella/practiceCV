/**
 * array.reduce((sumatoria, valorActual)=>{}, valor_inicial)
   Metodo que recorre todos los elementos de un arreglo
   - Su finalidad es hacer una sumatoria acumulada
    sumando cada valor de cada iteraccion para tener un
    resultado final 
*/

let numeros=[4,3,45,2,20];

let sumatoriaNumeros= numeros.reduce((sumatoria,elementoActual)=>{
    return sumatoria+ elementoActual;
},0);

console.log(`Suma total: ${sumatoriaNumeros}`);

/**
 * 
 */