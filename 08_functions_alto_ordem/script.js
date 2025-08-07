const list1 = [5, 10, 15, 25];
const list2 = [];
const nomes = ['Rafael', 'Natalia', 'Djhulia'];

console.warn("Função Alta Ordem")

function dobro(x) {
  return x * 2;
}

function triplo(x) {
  return x * 3;
}

console.group("MAP.________________")

const m1 = list1.map(dobro);
const m2 = list1.map(triplo);
const m3 = list1.map(x => x * 2);


console.log(m1);
console.log(m2);
console.log(m3);

console.groupEnd();

console.group("FILTER.________________")

function par(x) {
  return x % 2 == 0;
}

const f1 = list1.filter(par);
const f2 = list1.filter(x => x % 2 == 0);
const f3 = list1.filter(x => x < 3 == 0);

console.log(f1);
console.log(f2);
console.log(f3);

console.groupEnd();

console.group("REDUCE.________________");

function soma(x, y) {
  return x + y;
}

function produto(x, y) {
  return x * y;
}

const r1 = list1.reduce(soma);
const r2 = list2.reduce(soma, 0);
const r3 = list1.reduce(produto, 1);

console.log(r1);
console.log(r2);
console.log(r3);

console.groupEnd();


console.group("SORT.________________");

function compararPorTamanho(s1, s2) {
  return s1.length - s2.length;
}

const s1 = [...nomes].sort();
const s2 = [...nomes].sort(compararPorTamanho);

console.log(s1);
console.log(s2);

console.groupEnd();








