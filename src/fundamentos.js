/**
 * =========================================================
 * Fundamentos de JavaScript — 20 ejercicios resueltos
 * Cada función resuelve un enunciado de docs/EJERCICIOS.md
 * y tiene su prueba en tests/fundamentos.test.js
 * =========================================================
 */

// ---------------------------------------------------------
// 1. VARIABLES Y TIPOS DE DATOS
// ---------------------------------------------------------

/** 1.1 Devuelve el tipo de dato de un valor, distinguiendo "array" y "null". */
export function tipoDeDato(valor) {
  if (valor === null) return "null";          // typeof null devuelve "object" (error histórico de JS)
  if (Array.isArray(valor)) return "array";   // typeof [] también devuelve "object"
  return typeof valor;
}

/** 1.2 Convierte grados Celsius a Fahrenheit. */
export function celsiusAFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

/** 1.3 Arma un saludo usando template literals. */
export function saludar(nombre, edad) {
  return `Hola, ${nombre}. Tenés ${edad} años.`;
}

// ---------------------------------------------------------
// 2. OPERADORES Y CONDICIONALES
// ---------------------------------------------------------

/** 2.1 Indica si un número es par. */
export function esPar(n) {
  return n % 2 === 0; // el resto de dividir por 2 es 0 en los pares
}

/** 2.2 Convierte una nota numérica (0-10) en una calificación. */
export function calificar(nota) {
  if (nota < 0 || nota > 10) throw new RangeError("La nota debe estar entre 0 y 10");
  if (nota >= 9) return "Excelente";
  if (nota >= 7) return "Muy bien";
  if (nota >= 4) return "Aprobado";
  return "Desaprobado";
}

/** 2.3 Año bisiesto: divisible por 4, salvo los divisibles por 100 que no lo son por 400. */
export function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}

/** 2.4 FizzBuzz para un solo número (clásico de entrevistas). */
export function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return String(n);
}

// ---------------------------------------------------------
// 3. BUCLES
// ---------------------------------------------------------

/** 3.1 Suma los números del 1 al n con un bucle for. */
export function sumarHasta(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) suma += i;
  return suma;
}

/** 3.2 Factorial con un bucle while. */
export function factorial(n) {
  if (n < 0) throw new RangeError("No existe el factorial de un número negativo");
  let resultado = 1;
  while (n > 1) {
    resultado *= n;
    n--;
  }
  return resultado;
}

/** 3.3 Cuenta las vocales de un texto (con o sin tilde). */
export function contarVocales(texto) {
  let cuenta = 0;
  for (const letra of texto.toLowerCase()) {
    if ("aeiouáéíóúü".includes(letra)) cuenta++;
  }
  return cuenta;
}

/** 3.4 Indica si un número es primo. */
export function esPrimo(n) {
  if (n < 2) return false;
  // Alcanza con probar hasta la raíz cuadrada
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// ---------------------------------------------------------
// 4. FUNCIONES
// ---------------------------------------------------------

/** 4.1 Invierte un texto. */
export const invertir = texto => [...texto].reverse().join("");

/** 4.2 Palíndromo: se lee igual al derecho y al revés (ignora espacios, tildes y mayúsculas). */
export function esPalindromo(texto) {
  const limpio = texto
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // quita tildes
    .replace(/[^a-z0-9ñ]/g, "");                        // quita espacios y signos
  return limpio === invertir(limpio);
}

/** 4.3 Función de orden superior: devuelve una función que multiplica por n (closure). */
export function crearMultiplicador(n) {
  return x => x * n;
}

// ---------------------------------------------------------
// 5. ARRAYS
// ---------------------------------------------------------

/** 5.1 Devuelve el mayor número de un array sin usar Math.max. */
export function mayor(numeros) {
  if (numeros.length === 0) return undefined;
  let max = numeros[0];
  for (const n of numeros) if (n > max) max = n;
  return max;
}

/** 5.2 Promedio usando reduce. */
export function promedio(numeros) {
  if (numeros.length === 0) return 0;
  return numeros.reduce((acc, n) => acc + n, 0) / numeros.length;
}

/** 5.3 Quita duplicados manteniendo el orden. */
export const sinDuplicados = lista => [...new Set(lista)];

/** 5.4 Divide un array en grupos de tamaño `tamanio`. */
export function agrupar(lista, tamanio) {
  const grupos = [];
  for (let i = 0; i < lista.length; i += tamanio) grupos.push(lista.slice(i, i + tamanio));
  return grupos;
}

// ---------------------------------------------------------
// 6. OBJETOS
// ---------------------------------------------------------

/** 6.1 Cuenta cuántas veces aparece cada palabra. */
export function frecuenciaPalabras(texto) {
  const frecuencias = {};
  for (const palabra of texto.toLowerCase().split(/\s+/).filter(Boolean)) {
    frecuencias[palabra] = (frecuencias[palabra] || 0) + 1;
  }
  return frecuencias;
}

/** 6.2 Total de un carrito: [{ precio, cantidad }] */
export function totalCarrito(items) {
  return items.reduce((total, { precio, cantidad }) => total + precio * cantidad, 0);
}

/** 6.3 Agrupa personas por ciudad: { "Lima": ["Ana"], ... } */
export function agruparPorCiudad(personas) {
  return personas.reduce((grupos, persona) => {
    (grupos[persona.ciudad] ||= []).push(persona.nombre);
    return grupos;
  }, {});
}
