// Pruebas con el test runner que ya trae Node.js (no hay que instalar nada)
// Ejecutar con:  npm test   (o  node --test tests/fundamentos.test.js)
import { test } from "node:test";
import assert from "node:assert/strict";
import * as f from "../src/fundamentos.js";

test("1. Variables y tipos", () => {
  assert.equal(f.tipoDeDato(null), "null");
  assert.equal(f.tipoDeDato([1, 2]), "array");
  assert.equal(f.tipoDeDato("hola"), "string");
  assert.equal(f.celsiusAFahrenheit(100), 212);
  assert.equal(f.saludar("Ana", 30), "Hola, Ana. Tenés 30 años.");
});

test("2. Condicionales", () => {
  assert.equal(f.esPar(4), true);
  assert.equal(f.esPar(7), false);
  assert.equal(f.calificar(9.5), "Excelente");
  assert.equal(f.calificar(3), "Desaprobado");
  assert.throws(() => f.calificar(11), RangeError);
  assert.equal(f.esBisiesto(2024), true);
  assert.equal(f.esBisiesto(1900), false);
  assert.equal(f.esBisiesto(2000), true);
  assert.deepEqual([3, 5, 15, 7].map(f.fizzBuzz), ["Fizz", "Buzz", "FizzBuzz", "7"]);
});

test("3. Bucles", () => {
  assert.equal(f.sumarHasta(100), 5050);
  assert.equal(f.factorial(5), 120);
  assert.equal(f.factorial(0), 1);
  assert.equal(f.contarVocales("Programación"), 5);
  assert.equal(f.esPrimo(97), true);
  assert.equal(f.esPrimo(1), false);
});

test("4. Funciones", () => {
  assert.equal(f.invertir("hola"), "aloh");
  assert.equal(f.esPalindromo("Anita lava la tina"), true);
  assert.equal(f.esPalindromo("Programar"), false);
  const triple = f.crearMultiplicador(3);
  assert.equal(triple(7), 21);
});

test("5. Arrays", () => {
  assert.equal(f.mayor([3, 9, -2, 7]), 9);
  assert.equal(f.mayor([]), undefined);
  assert.equal(f.promedio([2, 4, 6]), 4);
  assert.deepEqual(f.sinDuplicados([1, 2, 2, 3, 1]), [1, 2, 3]);
  assert.deepEqual(f.agrupar([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test("6. Objetos", () => {
  assert.deepEqual(f.frecuenciaPalabras("hola mundo hola"), { hola: 2, mundo: 1 });
  assert.equal(f.totalCarrito([{ precio: 100, cantidad: 2 }, { precio: 50, cantidad: 1 }]), 250);
  assert.deepEqual(
    f.agruparPorCiudad([{ nombre: "Ana", ciudad: "Lima" }, { nombre: "Luis", ciudad: "Quito" }, { nombre: "Eva", ciudad: "Lima" }]),
    { Lima: ["Ana", "Eva"], Quito: ["Luis"] }
  );
});
