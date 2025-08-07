const x = 30;

if (x > 15) {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log("Imprimindo dentro do if:");
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(x);

}

console.log("Imprimindo fora do if:");
console.log(a);
// console.log(b); /* Erro, não vaza escpop */
// console.log(c); /* Erro, não vaza escopo */

console.log("Imprimindo resultando for");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

const y = 10;

if (y > 5) {
    const y = 50;
    console.log(y);
}

console.log(y);

/*  */

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction() {
    var myVariable = 'local';
    return myVariable;
}
function myOtherFunction() {
    myOtherVariable = 'local';
    return myOtherVariable;
}
console.log(myVariable); //{1}
console.log(myFunction()); //{2}
console.log(myOtherVariable); //{3}
console.log(myOtherFunction()); //{4}
console.log(myOtherVariable); //{5}


