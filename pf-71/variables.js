/**
 * En js hay 3 formas de declarar varibales
 * !existe una forma que ya no se recomienda su uso
 *  !var
 * al proceso de crear una variable y darle unvalor se llama asigmacion
 * 
 * a las variables que pueden ser reasignadas( pueden cambiar en un futuro el
 * valor que tienenn) se declaran
 * ? let nombreVariable = valor;
 * 
 *  el operador = se conoce como operador de asignacion 
 * una vez creada una variable podemos usarla en otros lugares del codigo
 * utilizando su nombre, las variables al ser utilizdas no van entre ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no pude cambiar)
 * se declaran:
 * ? Const nombreVariable = valor;
 * 
 * Notas:
 * Palabras reservadas: son palabras que utiliza en lenguaje
 */

let nombre = "fernando"; //tipo string
console.log(nombre);

const birthYear = 2003; //tipo numero
console.log(birthYear)

/**
 * Reasignando una variable (cambiando el valor que tiene)
 * Cuando reasignamos una variable (una variable ya creada)
 * !Ya no es necesario ponet let
console.log(birthYear);
birthYear = 2005;
 */

nombre = "ruperto";
console.log(nombre);

/**
 * concatenar nos permite anidar el valor de una variable a un texto
 */

console.log("Hola soy " + nombre + " naci en: " + birthYear)