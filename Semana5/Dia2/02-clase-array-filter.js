/**
 * array.filter((elemento,indice?,arreglo?)=>{})
 * Metodo que recorre todos los elementos de un arreglo
 * 
 * -Por cada item se ejecuta el callback que pasamos al 
 * metodo filter
 * -El metodo filter opcionalmente, puede retornar un elemento por
 * cada iteracion
 * -Por ser un metodo filter, se considera que dentro de la 
 * estructura del callback habra una especie de validacion
 * o filtro con un IF
 * -IMPORTANTE:
 * El elemento que sea retornado en las iteraciones, va a ser 
 * SIEMPRE EL MISMO ELEMENTO, no puede ser un objeto
   nuevo o un valor diferente 

   -sin ningun elemento coincide con la busqueda, de todas
   formas se retornara un arreglo vacio
*/

let users = [
    {
        id: 1,
        email: 'george.bluth@reqres.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        age: 35
    },
    {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        age: 50
    },
    {
        id: 3,
        email: 'emma.wong@reqres.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        age: 36
    },
    {
        id: 4,
        email: 'eve.holt@reqres.in',
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        age: 40
    },
    {
        id: 5,
        email: 'charles.morris@reqres.in',
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
        age: 17
    },
    {
        id: 6,
        email: 'tracey.ramos@reqres.in',
        first_name: 'Tracey',
        last_name: 'Ramos',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
        age: 36
    },
];
/**
 * Filtrar los usuarios mayores o iguales a 17años
 */

let resultado= users.filter((usuario,i)=>{
    if(usuario.age>=17){
        return usuario.first_name;
    }

}); 
console.log(resultado)

/**
 * Forma corta de hacer un filter
 * Ejm: filtar todos los usuarios que tengan gmail
 */
let gmails= users.filter((usuario,i)=>(usuario.email.indexOf('gmail')>=0));
console.log(gmails);
