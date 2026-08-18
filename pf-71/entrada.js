/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingreso el usuario
 *    1.2 Usar el valor inmediatamente
 * !Importante
 * 1. no se recomienda su uso en aplicaciones en produccion
 * 2. Bloquea el código, esto quiere decir que el código que este debajo
 * de donde escribimos el uso de prompt no se va a ejecutar, hasta que
 * el usuario ingrese algo.
 * 3. No se puede personalizar
 * 4. Todo lo que ingresa mediante prompt siempre es un String\
 *
 * Nota:
 * ? \n es un caracte que nos inserta un salto de linea
 */

/** 
const edad = prompt("ingresa tu edad: ", 23);
console.log(edad)

const nombre = prompt("ingresa tu nombre: ", "ruperto");
console.log("Hola soy: " + nombre + " y tengo " + edad + " años") */

const serie = prompt("escribe el nombre de tu pelicula o serie favorita: ");
const personaje = prompt("cual es tu personaje favorito: ");
const q = prompt("escribe por que: ");
console.log("Mi personaje favorito es " + personaje + " el cual sale en mi pelicula favorita " + serie + " por que es un " + q + ".")