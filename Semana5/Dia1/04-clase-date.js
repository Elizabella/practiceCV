/**
 * Clase Date
 * para manejar fechas
 */
let hoy = new Date();
console.log(hoy);

/**
 * Obtener el año de un objeto DATE
 * date
 */
// console.log(`Año actual: ${}`)

console.log(`Mes actual: ${hoy.getMonth()}`);

/**
 * Obtener la fecha de hoy (el dia del mes)
 * date.getDate();
 */
console.log(`Dia del mes: ${hoy.getDate()}`);
/**
 * Obtener las horas, minutos y segundos
 * date.getHours()
 * date.getMinutes()
 * date.getSeconds()
 */
console.log(`Hora actual: ${hoy.getHours()}`);
console.log(`Minutos actual: ${hoy.getMinutes()}`)

/**
 * date.getDay();
 */
const dias= [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Juevess',
    'Viernes',
    'Sabado',
];
console.log(`Dia de la semana: ${dias[hoy.getDay()]}`);

/**
 * Constructores de fechas
 */

let diaDelPadre = new Date(2021,5,20,0,0,0);
console.log('El dia del padre es: ')
console.log(dias[diaDelPadre.getDay()]);
