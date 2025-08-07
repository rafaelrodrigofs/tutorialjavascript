console.warn("Funções/Functions");

/* Função delcarada */

function sayHello() {
    console.log('hello!');
}
console.log(typeof(sayHello()))

/*  */

function output(text, name){
    return (text, name);
}

console.log(typeof(output('Hello','My name is Rafael')));

/* Função expressa */

const soma = function (num1, num2) {
    const num = `Eu amo o numero ${num1} e o numero ${num2}`;
    return num;
}

console.log(soma(50, 801));
console.log(typeof soma());

/* Função Arrow */

const soma1 = (num1, num2) => num1 + num2; 

/* MDN return */


function counter() {
  for (var count = 1; ; count++) {
    // loop infinito
    console.log(count + "A"); // até 5
    if (count === 5) {
      return;
    }
    console.log(count + "B"); // até 4
  }
  console.log(count + "C"); // nunca aparece
}

counter();

// Saída:
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
