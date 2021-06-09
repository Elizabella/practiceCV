/**
 * OBJETOS EN JAVASCRIPT
 */
let cpu = {
    ram: 16,
    nucleos:8,
    discoSolido: "1Tb",
    enfriamientoLiquido: false,

}
console.log(cpu);
//modificando una propiedad del objetos
cpu.ram=8;
console.log(cpu);
//////////////////////////////////////

let plato={
    nombre: "Asado de tira",
    precio: 39.00,
    ingredientes:["carne de res", "papas", "legumbres"]
}
/* ¿vomo agregar un ingrediente al objeto plato */

plato.ingredientes.push("chorizo");
plato.ingredientes[0]="";

///////////////////////////////////////////////////////
let objTrabajador={
    datosPersonales:{
    nombre:"Jorge",
    apellido: "Garnica",
    edad: 29,
},
    cargo: "software developer",
    sueldo: 950.00
}
//¿Como agregar un atributo a un objeto?

console.log(objTrabajador);

////////////////////////////////////////

let ajiGallina = {
    nombre: "Ají de gallina",
    precio: 12.00,
    ingredientes: [{
      nombre: "Gallina",
      um: "pechuga",
      cant: 1
    }, {
      nombre: "Ají amarillo",
      um: "gramos",
      cant: 200
    }]
  }


  let ajiGallina = {
      imprimirIngredientes: function(){
          console.log("-----Listando los ingredientes-----");
        for (let i = 0; i < ajiGallina.ingredientes.length; i++) {
  
            console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`);
          
          }  
        //console.log("Imprimiendo ingredientes");
      },
      agregarIngrediente: function(unidadMedida, cantidad, nombre){
          //
          //Realizar el algoritmo para poder ejecutar la funcion
          // agregarIngrediente y agregar un nuevo ingredientes
          console.log("listado los ingredientes");
          

      },
    nombre: "Ají de gallina",
    precio: 12.00,
    ingredientes: [{
      nombre: "Gallina",
      um: "pechuga",
      cant: 1
    }, {
      nombre: "Ají amarillo",
      um: "gramos",
      cant: 200
    }]
  }
ajiGallina.imprimirIngredientes();

  console.log(ajiGallina);
  
  console.log("Listando los ingredientes");
  
  for (let i = 0; i < ajiGallina.ingredientes.length; i++) {
  
    console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`);
  
  }

