/**
 * Clase HTMLElement, sus propiedades y metodos
 */
/**
 * elemento. innerText
 * SET -GET
 * texto interno de la etiqueta
 */

const parrafo1=document.getElementById('#parrafo1');
//get
console.log(parrafo1.innerText);
//set
parrafo1.innerText='Nuevo texto del parrafo';

/**
 * elemento.innerHTML
 * Analogo al innerText, sin embargo, si colocamos textos
 * con etiquetas, las etiquetas
 */
const div1= document.getElementById('div1');
const div2= document.getElementById('div2');

// seteando innerText
div1.innerText="<a href='www.google.com'>Link a Google</a>";
//seteando innerText
div2.innerHTML="<a href='www.google.com'>Link a Google</a>";

/**
 * elemento.append(otro_elemento)
 * agrega un elemento dentro de otro.
 * OJO: agrega el elemento al final de los hijos del eleemento padre
 */
//1. creando un elemento "strong"
const textoNegrita=document.createElement('strong');
textoNegrita.innerText='Codigo 2021';
parrafo1.append(textoNegrita);

//////////////////////////////////////

const listaUsuarios=document.querySelector('#lista-usuarios');

/**
 * 1. por cada usuario, crear un <li>
 * 2. colocar ele nombre y apellido dentro del <li>
 * 3. agregar el <li> al <ul>
 * 
 * 
 */

let  lisString='';
users.forEach((usuario)=>{
    lisString=lisString+ `<li>${usuario.first_name}${usuario.last_name}</li>`;

});

//  users.forEach((usuario)=>{
//      let liTemporal=document.createElement('li');
//      liTemporal.innerText=`${usuario}`
//  })

 //const listaUsuarios=document.querySelector('#lista-usuarios');


