// console.log("This is a string");
// console.log('This is a string');
// console.log(`This is a string`);

// console.log("Concatenation and interpolation:");
// const num = 14.5;

// /* Concatenação/Concatenation */
// console.log("The value of the product is " + num);
// console.log('The value of the product is ' + num);

// /* Interpolação/Interpolation */
// console.log(`The value of the product is ${num}`);

// console.log("Conversão entre number e string");
// const str1 = num.toString();
// console.log(`Tipo de ${str1}: ${typeof str1}`);

// const str2 = num.toFixed(2);
// console.log(`Tipo de ${str2}: ${typeof str2}`);

// const num1 = Number("14.5");
// console.log(`Tipo de ${num1}: ${typeof num1}`);

// const num2 = parseInt("21", 10);
// console.log(`Tipo de ${num2}: ${typeof num2}`);

// const num3 = parseInt("21", 16);
// console.log(`Tipo de ${num3}: ${typeof num3}`);

// const num4 = parseFloat("21.34", 10);
// console.log(`Tipo de ${num4}: ${typeof num4}`);

console.log(typeof(function(){}));

console.log("Funções de string");

const nome = "Rafael Rodrigo";
const nome2 = "Rafael,Rodrigo,Souza,De,Oliveira,Siqueira";

console.log(nome.length);
console.log(nome.slice(2,6)) 
console.log(nome.indexOf("o"));
console.log(nome.replace("Rodrigo", "Siqueira"));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.trim());
console.log(nome2.split(","));
console.log(nome.concat(" - ", nome2));
console.log(nome.includes("Rafael"));
console.log(nome.includes("Cavalheiro"));
console.log(nome.startsWith("Raf"));
console.log(nome.startsWith("Rodri"));
console.log(nome.endsWith("Rodrigo"));
console.log(nome.endsWith("Raf"));

console.log("Olá, mundo!");           // Mensagem simples
console.error("Erro ocorreu!");       // Mensagem de erro
console.warn("Cuidado!");              // Aviso
console.table([{nome:"Ana"}, {nome:"Beto"}]);  // Tabela
console.group("Meu grupo");            
console.log("Dentro do grupo");
console.groupEnd();
console.time("tempo");
for(let i=0; i<1000; i++){}
console.timeEnd("tempo");              // Tempo que o loop demorou








