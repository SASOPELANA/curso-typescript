let num1: number = 10;
let num2: number = 10;
let suma: number = 0;

// string
let hello: string = "Hola mundo desde typescript.";

function getSumar(n: number, n2: number) {
  return n + n2;
}

suma = getSumar(num1, num2);

console.log(`La suma es: ${suma}`);

function holaMundo(): void {
  console.log("Estoy aprendiendo typescript. ");
}

console.log(hello);
holaMundo();
