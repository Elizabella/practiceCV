/**
 * let CT=0;
unidades=+prompt("ingrese el costo de traje: ");
if (CT >=2500){
    console.log("Precio x producto: 0.85 centavos");
    // document.write(`Precio : ${total}`)
    DE=CT*0.15;
}else{
    console.log("Precio x producto: 0.90 centavos");
    DE=CT*0.08;
    PF=CT-DE;
}
console. log(`El descuento es: ${DE}`);
document.write(`El descuento es: ${DE}`)
console. log(`precio final es: ${PF}`);
document.write(`precio final es: ${PF}`)
 * 
 */
// let n1=32;
// let n2=5;
// let n3=100;
// let mayor=0;
// if(n)

/**
 * Espacio Teorico
 * Tipos de comparadores;
 * Comparadores Aritmeticos
 * a>b (si a es mayor que b)
 * a<b (si a es menor que b)
 * a<=b (si a es menor o igual que b)
 * a>=b (si a es mayor o igual que b)
 * a===b(si a es igual que b en valor y en tipo de dato)
 * a==b (si a es igual que b en valor)
 * a!==b(si a es diferente que b)
 * COMPARADORES LOGICOS
 * a&&b (si a y b son verdaderos)
 * a!!b (si a y /o b son verdaderos)
 * !a (la negociacion de a)
 */
/**
 * Ejercicio 3.5 pag 58 version con operadores logicos
 */
let n1=90, n2=33, n3=42, mayor=0;
if(n1>n2 && n1>n3){
    mayor=n1;

}else{
    if(n2>n3 && n2>n1){
        mayor=n2;
    }else {
        mayor=n3;
    }
}
document.write(`El mayor de : ${n1} ${n2} y ${n3} es ${mayor}`);

// let mayor=0;
// if(n1>n2){

/**
 * Ejercicio: Cada el precio de un producto, aplicar
 * el 15% de dcto en caso sea dia "lunes" o "martes"
 */
let precio = 1000.00;
let dia = "miercoles";
if (dia === "lunes" || dia === "martes"){
    precio=precio*0.85;
}
document.write(`Total a pagar: ${precio}`);
/**
 * Ejercicio 3.6 pag. 61
 
 */
let platos =250;
let total =0;
if(platos < 200 ){
    total=platos *95;
}else{
    if(platos<=300){
        total= platos*85;
    }else{
        total =platos*75;
    }
}
document.write(`Total a pagar: ${precio}`)

let n1=5, n2=4, n3=3, n4=2;

horas= +prompt("Ingrese  las horas: ");
if (horas >= 0&&horas >= 2){
    T=horas*n1
}else {
    if(horas >=3 && horas >=5)
    {
        T=horas*n2;

    }else{
        if( horas>=6 && horas >= 10)
        {
            T=horas*n3;

        }else{
            if(horas>=11)
            T=horas*4;
        }
    }
}
