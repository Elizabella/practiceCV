const suma = function (a,b) {
    return a + b
}

const multiplicar = (a , b)=> {
    return a*b
}

console.log(`5x8: ${multiplicar(5,8)}`);

/**
 * Las funciones anonimas pueden tener retornos implicitos
 * si el desarrollo de la funcion tiene una linea de codigo
 * CONSEJO:
 * Cuando queremos representar un retorno implicito, 
 * procurar encerrarlo en simbolo de parentesis
 */

const dividir= (a,b)=> a/b;
console.log(`9/3: ${dividir (9,3)}`)

/**
 * Si una funcion de flecha recibe 1 parametro (exactamente 1)
 * pueden obviarse los parentsis que encierran a ese parametro
 */

const cuadrado = n => n*n;
console.log(`Cuadrado de 9: ${cuadrado (9)}`);