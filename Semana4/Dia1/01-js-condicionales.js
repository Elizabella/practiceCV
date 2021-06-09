let unidades=0;
unidades=+prompt("¿Cunatos productos desea comprar?");
if (unidades >=1000){
    console.log("Precio x producto: 0.85 centavos");
    // document.write(`Precio : ${total}`)
    total=unidades*0.85;
}else{
    console.log("Precio x producto: 0.90 centavos");
    total=unidades*0.90;
}
console. log(`Total a pagar: ${total}`);
document.write(`Total a pagar: ${total}`)