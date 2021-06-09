/**
 * ¿Como insertar un elemento en un arreglo?
 * arreglo. push(elemento_a_insertar)
 * Insertando un elemento en la posicion final de un arreglo 
 */
let marcasDeAutos=[];
marcasDeAutos.push("Hyundai");
marcasDeAutos.push("kia");
marcasDeAutos.push("audi");

console.log(marcasDeAutos);

/**
 * Ejerciccio: HAcer que el usuario pueda el
 * ingresar 5 marcas adicionales
 */
for(let i=0; i<5;i++){
    let marca=prompt("Ingrese una nueva marca");
    //inyectando la nueva marca en el arreglos
    marcasDeAutos.push(marca);
}
let marca="Mercedes Benz"
console.log()

