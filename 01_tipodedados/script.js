console.log('Olá, isso é um teste');

/* usar Const, daria erro, pois const não altera o valor. Let pode ser alterado o valor */
let num = 3;
num = 5;

/* Mesmo que seja um numero decimal de ponto flutuante, o tipo de dado é number */
const float = 3.5;

/* Variavel String */
const myName = 'Rafael Rodrigo';

/* Variavel Boleano, verdadeiro ou falso */
const boolean = true;
const boolean2 = false;

/* Variavel null, no caso vazio*/
const varNull = null;

const obj = {
    name: 'Maria',
    age: 22
}

const array = [1, 2, 3];

/* Variavel não declarada ou não definida*/
let und;
let und2 = undefined;

console.log(num, typeof num);
console.log(float, typeof float);
console.log(myName, typeof myName);
console.log(boolean, typeof boolean);
console.log(boolean2, typeof boolean2);
console.log(varNull, typeof varNull);
console.log(obj, typeof obj);
console.log(array, typeof array);
console.log(und, typeof und);
console.log(und2, typeof und2);