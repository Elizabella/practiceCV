/**
 * Ciclo for
 */
/**
 * Ejercicio: Leer 4 notas y obtener el promedio de ellas
 */
// let suma=0;
// for(let i=0; i<4;i++){
//     suma = suma + +prompt(`Ingrese la nota : ${i+1}`)
// }
// console.log(suma);

/**
 * Ejercicio: dados dos numeros
 * a y b
 * Calcular la multiplicacion de ambos sin hacer uso
 * del simbolo *(asterisco), solo se pueden usar sumas
 * sucesivas
 */

// let a=8;
// let b=5;
// let total = 0;

// for(let i=0; i<b; i++){
//     total+=a;
// }

// console.log(`${a}x${b} = ${total}`);

/**
 * Ejercicio: 
 * Con un ciclo for, simular la tabla de multiplicar
 * de un numero x
 * la tabla debe ir del 0 al 12
 */
// let x=9;
// for(let i=0; i<13;i++)
// {
  
//     console.log(`${i}x${x} = ${i*x}` );
// }

/**
 * Mejore el ejercicio anterior, para mostrar
 * la tabla de los n primero numero naturales
 * cada numero debe mostrar su tabla del 0 al 12
 * desde 0 hasta N
 */

// let n=5;
// for(let i=0; i<n; i++ )
// {
//     console.log(`/////TABLA DEL ${i}//////` );
//    for(let c=0; c<13; c++){

//     console.log(`${i}x${c} = ${i*c}` );

//    }
//    console.log(`/////FIN TABLA DEL ${i}//////` );
   
// }

/**
 * RECORRIENDO ARREGLOS
 */
let edades=[35,45,68,80,74,20,15,95,65,45];
/**
 * arreglo.lenght=> devuelve la cantidad de elementos de un arreglo
 */
console.log(`Elementos del arreglo: ${edades.lenght}`);
console.log(`Primer elemento de un arreglo: ${edades[0]}`);
console.log(`Primer elemento de un arreglo: ${edades[edades.lenght-1]}`);

for(let i=0; i<edades.lenght; i++ ){
    /**
     * por ejemplo, solo se pueden vacunar las personas que tengan 
     * una edad mayor o igual a 60 añitos
     * imprimir las edades aptas para la vacuna
     */
    if(edades[i]>=60){
        console.log(`Apto con edad de : ${edades[i]} años`);
    }
}
