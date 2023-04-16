// 1- Questão JS

let a = 0;
let b = 1;
let c = 0;

while (c < numero) {
  c = a + b;
  a = b;
  b = c;
}

if (c === numero) {
  console.log(numero + " pertence à sequência de Fibonacci.");
} else {
  console.log(numero + " não pertence à sequência de Fibonacci.");
}


