# Enunciados

Intentá resolver cada ejercicio **antes** de mirar la solución en `src/fundamentos.js`.
Tip: copiá el archivo, borrá el cuerpo de las funciones y corré `npm test` hasta que todo pase.

## 1. Variables y tipos de datos
1. `tipoDeDato(valor)`: devolvé el tipo de un valor. Ojo: `null` y los arrays deben devolver `"null"` y `"array"`.
2. `celsiusAFahrenheit(c)`: fórmula `F = C × 9/5 + 32`.
3. `saludar(nombre, edad)`: devolvé `"Hola, Ana. Tenés 30 años."` usando template literals.

## 2. Operadores y condicionales
1. `esPar(n)`
2. `calificar(nota)`: 9-10 Excelente, 7-8.9 Muy bien, 4-6.9 Aprobado, menos de 4 Desaprobado. Lanzá un `RangeError` si la nota está fuera de 0-10.
3. `esBisiesto(anio)`
4. `fizzBuzz(n)`: "Fizz" si es múltiplo de 3, "Buzz" de 5, "FizzBuzz" de ambos; si no, el número como texto.

## 3. Bucles
1. `sumarHasta(n)` con `for`.
2. `factorial(n)` con `while`.
3. `contarVocales(texto)`, incluyendo vocales con tilde.
4. `esPrimo(n)`.

## 4. Funciones
1. `invertir(texto)` como arrow function.
2. `esPalindromo(texto)` ignorando espacios, tildes y mayúsculas.
3. `crearMultiplicador(n)`: devolvé otra función (closure).

## 5. Arrays
1. `mayor(numeros)` sin usar `Math.max`.
2. `promedio(numeros)` con `reduce`.
3. `sinDuplicados(lista)`.
4. `agrupar(lista, tamanio)`: `[1,2,3,4,5], 2` → `[[1,2],[3,4],[5]]`.

## 6. Objetos
1. `frecuenciaPalabras(texto)`.
2. `totalCarrito(items)`.
3. `agruparPorCiudad(personas)`.

## Desafío extra
Agregá tus propios ejercicios en `src/` con su prueba en `tests/`. Así tu repositorio crece y muestra constancia en GitHub.
