/**
 * Funciones
 * porciones de codigo disponibles
 * para ejecutarlas en cualquier momento
 */
function tablaDeMultiplicar(n=5, limite=10){
    console.log(`****Tabla del ${n}`);
    //let n=6;
    for(let i=0; i<limite; i++){
        console.log(`${n}x${i}=${i*n}`);
    }
}

 tablaDeMultiplicar(5,12);
 tablaDeMultiplicar(6,15);
// tablaDeMultiplicar(7,10);
tablaDeMultiplicacion(7);
tablaDeMultiplicacion(8);


function factorial(n){


    }

function sumar(a,b) {
   // let arreglo=[8,2];
    //return arreglo;

}

function suma(a,b,c,d){
    return (a+b+c+d);
}
// let suma7y6y5y3=sumar (7,6,5,3);
// console.log(suma7y6y5y3)

function validarPasswords(ps1,ps2){
    if(ps1===ps2 && ps1.length>=6){
        return true;
    }
    console.log("")
    return false;
}