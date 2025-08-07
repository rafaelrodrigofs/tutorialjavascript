
console.warn("Instruções condicionais");


const time = 20;


/* If and Else */
if (time < 12) {
    console.log("Bom dia");
}
else if (time < 18) {
    console.log("Boa tarde")
}
else {
    console.log("Boa noite")
}

(time < 14) ? console.log("verdadeiro") : console.log("falso") ;

/* Switch */

const week = 0;

switch (week) {
    case 1:
        console.log("domingo");
        break;
    case 2:
        console.log("segunda");
        break

    default:
        console.log("Nenhum valor encontrado")
        break;
}

console.warn("Laços");


/* FOR */
for (let i = 1; i > 11; i++) {
    console.log(`7 x ${i} = ${7 * i}`);
}

/* WHILE */
let count = 10;
while (count > 0) {
    console.log(`Count = ${count}`);
    count--;
}

/* DO */
let test = 4;
do {
    console.log(`Teste = ${test}`);
    test--;
} while (test > 0)

