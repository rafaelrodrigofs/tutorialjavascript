console.warn("Operadores Aritméticos");

let num1 = 3;
let num2 = 4;

console.log(`3 + 4 = ${num1 + num2}`)
console.log(`3 - 4 = ${num1 - num2}`)
console.log(`3 * 4 = ${num1 * num2}`)
console.log(`3 / 4 = ${num1 / num2}`)
console.log(`3 % 4 = ${num1 % num2}`)
console.log(`3 ** 4 = ${num1 ** num2}`)
console.log(`Pré-incremento 24 = ${num2++}`)
console.log(`Pós-incremento 3 = ${++num1}`)

console.warn("Operadores de atribuição");

let number = 15
let num3 = number;
let num4 = number;
let num5 = number;
let num6 = number;

console.log(`3 + 3 = ${num3 += num3}`)
console.log(`3 - 3 = ${num4 -= num4}`)
console.log(`3 * 3 = ${num5 *= num5}`)
console.log(`3 / 3 = ${num6 /= num6}`)

console.warn("Operadores comparativos");

/* Mesmo que seja uma string, como só tem numero, ele faz uma coerção de tipo */
console.log("1" == 1);
console.log(1 == 0);
console.log("1" != 1);
console.log(1 != 0);

console.log("1" === 1);
console.log(1 === 0);
console.log("1" !== 1);
console.log(1 !== 0);

/* Explicitamente aqui ele faz uma coerção de tipo, convertendo para numero */
console.log(false == 0);
console.log("" == 0);

/* Aqui é uma exceção a regra */
console.log(null == undefined);

console.warn("Comparador de tipo expecifico");

const x = "Rafael Rodrigo";
const y = "Rafael Rodrigo";
const a = new String("Rafae Rodrigo");
const b = new String("Rafael Rodrigo");

console.table(b);

console.log(`x === y: ${x === y}`);
console.log(`a === b: ${a === b}`);
console.log(`typeof a: ${typeof a}`);
console.log(`typeof x: ${typeof x}`);

console.warn("Operadores Logicos");


const teste = `(10 > 5) && (10 > 20) ${5 || 0}`;
console.log(`${teste}`)

console.log(!"")








