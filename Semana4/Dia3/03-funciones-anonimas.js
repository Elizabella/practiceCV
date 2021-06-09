/**
 * FUNCIONES ANONIMAS y CALLBACKS
 */
/**
 * function buscarPorDNI(dni){
    setTimeout(function(){
        console.log("pasaron 3 segundo");
        return "Jorge"
    }, 3000)
    
}

let resultado=buscarPorDNI("78451245")
console.log(resultado);
 */

function buscarPorDNI(dni, parametro2){
    setTimeout(function(){
        parametro2(Jorge);
    },3000)
}
buscarPorDNI("78451245", function(nombre){

}
)

/**
 * Funcion que entrega los usuarios del sistema
 * @param {Function} callback
 * Funcion que recibe un callback al cual envia 
 * un arreglo con la lista de usuarios
 */
const getNombres=(callback) =>{

};
/**
 * 
 * un arreglo con lalista de usuario
 */

const getNombres = (callback) => {
    fetch(`https://reqres.in/api/users`).then((peticion) => {
      return peticion.json();
    }).then(data => {
      let nombres = data.data.map(obj => obj.first_name);
      callback(nombres);
    })
  };

  getNombres(function(usuarios){
    // x=usuarios  
    console.log(usuarios);
  });
//   console.log(x);

