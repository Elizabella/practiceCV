

/**
 * Una de las propiedades mas importantes de window,
 * es el objeto "document".
 * que sirve para controlar los elementos internos del DOM
 * -crear etiquetas
 * -eliminar etiquetas
 * -cambiar clases
 * -cambiar Estilos
 * -modificar textos
 * -capturar valores en los formularios, 
 * -etc
 */

console.log(window.document);

/***
 * Propiedades del objeto document
 */
/**
 * document.getElementById("id_de_un_elemento_del_DOM")
 * Obtiene en una variable, la referencia a una etiqueta del DOM
 */
//capturando tu titulo
const titulo = document.getElementById('titulo');

console.log(titulo)
//capturar las variables
/**
 * document getElementsByClassName("nombre_de_la_clase")
 * Obtiene en una "coleccion" (no Array) el conjunto de elementos
 * que comparten una misma clase
 */
const listItems=document.getElementsByClassName('list-item');
console.log(listItems);
console.log(listItems.length);
//listItems.forEar
/**
 * artificio para convertir una coleccion de elementos
 *  a un arreglo genuino
 * 
 */
const arregloListItems= Array.from(listItems);
console.log(arregloListItems);

/**
 * document.querySelector("selector_del_elemento_como_en_css")
 * Obtiene UN elemento dado un selector al estilo css
 * Ejm: 
 * .rojo =>selecciona un elemento de clase  "rojo"
 * #titulo =>selecciona un elemento de id "titulo"
 * div > .parrafo => selecciona un elemento con clase "parrafo"
 * que esté dentro de un div
 */

const parrafo1=document.querySelector('#parrafo1');
console.log(parrafo1);

/**
 * document.querySelectorALL("selector_como_en_css")
 * Analogo a querySelector, sin embargo, si el selector
 * captura a mas de un elemento, nos retorna la coleccion
 * de los elementos
 */
const listItemsLi=document.querySelectorAll('li');
console.log(listItemsLi);
/**
 * document.createElement("etiqueta_a_crear")
 * Devuelve la referencia a un elemento creado desde javascript
 * Ojo: No significa que el elemento se encuentre en el DOM,
 * solo esta creado
 * 
 */
const linkGoogle=document.createEle