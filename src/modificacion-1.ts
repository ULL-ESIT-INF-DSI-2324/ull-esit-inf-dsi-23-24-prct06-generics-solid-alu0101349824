/**
 * Interfaz genérica `Arithmeticable` para operaciones aritméticas básicas.
 * Define los métodos para sumar, restar, multiplicar y dividir.
 * @template T Tipo genérico que especifica el tipo de los operandos y el resultado.
 * @method add Suma de dos números.
 * @method subtract Resta de dos números.
 * @method multiply Multiplicación de dos números.
 * @method divide División de dos números.
 */
export interface Arithmeticable<T> {
  /**
   * Realiza la suma de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La suma de a y b.
   */
  add(a: T, b: T): T;
  /**
   * Realiza la resta de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La resta de a y b.
   */
  subtract(a: T, b: T): T;
  /**
   * Realiza la multiplicación de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns El producto de a y b.
   */
  multiply(a: T, b: T): T;
  /**
   * Realiza la división de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns El cociente de a y b.
   */
  divide(a: T, b: T): T;
}

/**
 * Clase `BasicCalculator` que implementa la interfaz `Arithmeticable` con números.
 * Realiza operaciones aritméticas básicas con números.
 * @implements Arithmeticable<number>
 * @method add Suma de dos números.
 * @method subtract Resta de dos números.
 * @method multiply Multiplicación de dos números.
 * @method divide División de dos números.
 * @throws Error si el denominador es cero.
 * @returns El resultado de la operación aritmética.
 */
export class BasicCalculator implements Arithmeticable<number> {
  /**
   * Realiza la suma de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La suma de a y b.
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * Realiza la resta de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La resta de a y b.
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * Realiza la multiplicación de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns El producto de a y b.
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * Realiza la división de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @throws Error si el denominador es cero.
   * @returns El cociente de a y b.
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("El denominador no puede ser cero.");
    }
    return a / b;
  }
}
