/**
 * Interfaz `Arithmeticable` para operaciones aritméticas básicas.
 * Define los métodos para sumar, restar, multiplicar y dividir.
 * @method add Suma de dos números.
 * @method subtract Resta de dos números.
 * @method multiply Multiplicación de dos números.
 * @method divide División de dos números.
 * @returns El resultado de la operación aritmética.
 */
export interface Arithmeticable {
  /**
   * Realiza la suma de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La suma de a y b.
   */
  add(a: number, b: number): number;

  /**
   * Realiza la resta de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La resta de a y b.
   */
  subtract(a: number, b: number): number;

  /**
   * Realiza la multiplicación de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns El producto de a y b.
   */
  multiply(a: number, b: number): number;

  /**
   * Realiza la división de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns El cociente de a y b.
   */
  divide(a: number, b: number): number;
}

/**
 * Clase genérica ArithmeticableCollection que gestiona una colección
 * de elementos que implementan la interfaz Arithmeticable.
 * @template T Define el tipo de elementos que puede contener la colección,
 * restringido a aquellos que implementan Arithmeticable.
 */
export class ArithmeticableCollection<T extends Arithmeticable> {
  /**
   * Añade un elemento a la colección.
   * @property elements Lista de elementos de la colección.
   */
  private collection: T[] = [];

  /**
   * Añade un elemento a la colección.
   * @param item El elemento de tipo T que se añadirá a la colección.
   */
  addArithmeticable(item: T): void {
    this.collection.push(item);
  }

  /**
   * Obtiene un elemento de la colección.
   * @param index El índice del elemento a obtener.
   * @throws Error si el índice está fuera del límite.
   * @returns El elemento de tipo T en el índice especificado.
   */
  getArithmeticable(index: number): T {
    if (index < 0 || index >= this.collection.length) {
      throw new Error("Índice fuera del límite.");
    }
    return this.collection[index];
  }

  /**
   * Obtiene el tamaño de la colección.
   * @returns El número de elementos en la colección.
   */
  getNumberOfArithmeticables(): number {
    return this.collection.length;
  }
}
