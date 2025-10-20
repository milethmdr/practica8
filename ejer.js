// Ejercicio 1: Declaración y llamada de funciones básicas

// function formatearSaludo(persona, horaDelDia) {
//   const saludoBase = persona.edad >= 18 ? `Buenos días, Sr./Sra. ${persona.nombre}` : `Hola ${persona.nombre}`;
//   switch (horaDelDia) {
//     case "mañana":
//       return `${saludoBase}, que tenga una excelente mañana`;
//     case "tarde":
//       return `${saludoBase}, disfrute de su tarde`;
//     case "noche":
//       return `${saludoBase}, que descanses esta noche`;
//     default:
//       return `${saludoBase}, que tenga un buen día`;
//   }
// }

// // Función que reciba el radio de un círculo y retorne su área
// function calcularArea(radio) {
//   return Math.PI * Math.pow(radio, 2);
// }

// // Ejemplos
// console.log(formatearSaludo({nombre: "Ale", edad: 26}, "mañana"));
// console.log(formatearSaludo({nombre: "Ana", edad: 12}, "noche"));
// console.log("Área de círculo (radio 5):", calcularArea(5).toFixed(2));

// Ejercicio 2: Expresiones de función y funciones anónimas
// function calcularCubo(x) {
//   return x ** 3;
// }

// //expresión de función asignada a una variable
// const calcularCuboExpresion = function(x) {
//   return x ** 3;
// };

// //función anónima como callback para transformar cada elemento
// function transformarArray(arr) {
//   return arr.map(function(num) {
//     return num ** 2;
//   });
// }

// // Ejemplos
// console.log("Cubo (declaración):", calcularCubo(3));
// console.log("Cubo (expresión):", calcularCuboExpresion(4));
// console.log("Array transformado:", transformarArray([1, 2, 3, 4]));

// // Ejercicio 3: Funciones como argumentos (Higher-order functions)
// function procesarArray(arr, fn) {
//   return arr.map(fn);
// }

// //procesamiento
// function duplicar(x) {
//   return x * 2;
// }

// function cuadrado(x) {
//   return x ** 2;
// }
// function raizCuadrada(x) {
//   return Math.sqrt(x);
// }

// // Ejemplos
// const numeros = [4, 9, 16, 25];
// console.log("Duplicar:", procesarArray(numeros, duplicar));
// console.log("Cuadrado:", procesarArray(numeros, cuadrado));
// console.log("Raíz cuadrada:", procesarArray(numeros, raizCuadrada));

// Ejercicio 4: Recursión

// function factorial(n){
//   if (n <= 1) return 1; // Caso base
//   return n * factorial(n - 1); // Caso recursivo
// }

// //función fibonacci
// function fibonacci(n){
//   if (n <= 1) return n; // Casos base: fib(0)=0, fib(1)=1
//   return fibonacci(n - 1) + fibonacci(n - 2); // Recursión
// }

// //función sumarDigitos que suma todos los dígitos de un número entero
// function sumarDigitos(n) {
//   if (n< 10) return n; //base
//   return (n % 10) + sumarDigitos(Math.floor(n / 10)); //recursivo
// }

// // Ejemplos
// console.log("Factorial de 5:", factorial(5));
// console.log("Fibonacci posición 6:", fibonacci(6));
// console.log("Suma de dígitos de 1234:", sumarDigitos(1234));


// Ejercicio 5: Scope y Closures
function crearContador() {
  let contador = 0; // Variable privada
  return {
    incrementar: ()=> contador++,
    decrementar: ()=> contador--,
    obtenerValor: ()=> contador
  };
}

//ejemplos
const contador1 =crearContador();
const contador2 = crearContador();
contador1.incrementar();
contador1.incrementar();
contador2.decrementar();


console.log("Contador 1:", contador1.obtenerValor());
console.log("Contador 2:", contador2.obtenerValor()); 

