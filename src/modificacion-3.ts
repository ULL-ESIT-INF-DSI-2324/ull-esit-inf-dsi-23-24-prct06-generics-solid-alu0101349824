/**
 * Interfaz genérica `Arithmeticable` para operaciones aritméticas básicas.
 * Define los métodos para sumar, restar, multiplicar y dividir.
 * @template T Tipo genérico que especifica el tipo de los operandos y el resultado.
 * @method add Suma de dos números.
 * @method subtract Resta de dos números.
 * @method multiply Multiplicación de dos números.
 * @method divide División de dos números.
 * @returns El resultado de la operación aritmética.
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
   * @returns La multiplicación de a y b.
   */
  multiply(a: T, b: T): T;

  /**
   * Realiza la división de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns La división de a y b.
   */
  divide(a: T, b: T): T;
}

/**
 * Clase que representa un número complejo.
 * Implementa la interfaz `Arithmeticable` para realizar operaciones aritméticas.
 * @method add Suma de dos números complejos.
 * @method subtract Resta de dos números complejos.
 * @method multiply Multiplicación de dos números complejos.
 * @method divide División de dos números complejos.
 * @method toString Convierte el número complejo a una cadena de texto.
 * @param real Parte real del número complejo.
 * @param imaginary Parte imaginaria del número complejo.
 * @returns Un número complejo.
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Crea un número complejo.
   * @param real Parte real del número complejo.
   * @param imaginary Parte imaginaria del número complejo.
   */
  constructor(
    /**
     * Parte real del número complejo.
     * @type {number}
     * @public
     * @memberof Complex
     */
    public real: number,
    /**
     * Parte imaginaria del número complejo.
     * @type {number}
     * @public
     * @memberof Complex
     */
    public imaginary: number,
  ) {}

  /**
   * Realiza la suma de dos números complejos.
   * @param other Número complejo a sumar.
   * @returns La suma de este número complejo con otro.
   */
  add(other: Complex): Complex {
    return new Complex(
      this.real + other.real,
      this.imaginary + other.imaginary,
    );
  }

  /**
   * Realiza la resta de dos números complejos.
   * @param other Número complejo a restar.
   * @returns La resta de este número complejo con otro.
   */
  subtract(other: Complex): Complex {
    return new Complex(
      this.real - other.real,
      this.imaginary - other.imaginary,
    );
  }

  /**
   * Realiza la multiplicación de dos números complejos.
   * @param other Número complejo a multiplicar.
   * @returns La multiplicación de este número complejo con otro.
   */
  multiply(other: Complex): Complex {
    // (a+bi)(c+di) = (ac-bd) + (ad+bc)i
    return new Complex(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real,
    );
  }

  /**
   * Realiza la división de dos números complejos.
   * @param other Número complejo a dividir.
   * @returns La división de este número complejo entre otro.
   */
  divide(other: Complex): Complex {
    // (a+bi)/(c+di) = [(ac+bd)/(c^2+d^2)] + [(bc-ad)/(c^2+d^2)]i
    const denominator = other.real ** 2 + other.imaginary ** 2;
    return new Complex(
      (this.real * other.real + this.imaginary * other.imaginary) / denominator,
      (this.imaginary * other.real - this.real * other.imaginary) / denominator,
    );
  }

  /**
   * Convierte el número complejo a una cadena de texto.
   * @returns Representación en cadena del número complejo.
   */
  toString(): string {
    // Asegura que el signo correcto se añade entre la parte real e imaginaria
    const sign = this.imaginary >= 0 ? "+" : "";
    return `${this.real}${sign}${this.imaginary}i`;
  }
}

/**
 * Clase que representa un número racional.
 * Implementa la interfaz `Arithmeticable` para realizar operaciones aritméticas.
 * @method add Suma de dos números racionales.
 * @method subtract Resta de dos números racionales.
 * @method multiply Multiplicación de dos números racionales.
 * @method divide División de dos números racionales.
 * @method simplify Simplifica el número racional a su forma más simple.
 * @method mcd Calcula el máximo común divisor (MCD) de dos números.
 * @method toString Convierte el número racional a una cadena de texto.
 * @param numerator Numerador del número racional.
 * @param denominator Denominador del número racional.
 * @returns Un número racional.
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * Crea un número racional.
   * @param numerator Numerador del número racional.
   * @param denominator Denominador del número racional.
   * @throws Error si el denominador es cero.
   */
  constructor(
    /**
     * Numerador del número racional.
     * @type {number}
     * @public
     * @memberof Rational
     */
    public numerator: number,
    /**
     * Denominador del número racional.
     * @type {number}
     * @public
     * @memberof Rational
     */
    public denominator: number,
  ) {
    if (this.denominator === 0) {
      throw new Error("El denominador no puede ser cero.");
    }
    this.simplify();
  }

  /**
   * Realiza la suma de dos números racionales.
   * @param other Número racional a sumar.
   * @returns La suma de este número racional con otro.
   */
  add(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator,
    ).simplify();
  }

  /**
   * Realiza la resta de dos números racionales.
   * @param other Número racional a restar.
   * @returns La resta de este número racional con otro.
   */
  subtract(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator,
    ).simplify();
  }

  /**
   * Realiza la multiplicación de dos números racionales.
   * @param other Número racional a multiplicar.
   * @returns La multiplicación de este número racional con otro.
   */
  multiply(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator,
    ).simplify();
  }

  /**
   * Realiza la división de dos números racionales.
   * @param other Número racional a dividir.
   * @returns La división de este número racional entre otro.
   * @throws Error si el numerador del número racional `other` es cero.
   */
  divide(other: Rational): Rational {
    if (other.numerator === 0) {
      throw new Error(
        "No se puede dividir por un número racional con numerador 0.",
      );
    }
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator,
    ).simplify();
  }

  /**
   * Simplifica el número racional a su forma más simple.
   * @returns El número racional simplificado.
   */
  private simplify(): Rational {
    const mcd = this.mcd(this.numerator, this.denominator);
    this.numerator /= mcd;
    this.denominator /= mcd;
    return this;
  }

  /**
   * Calcula el máximo común divisor (MCD) de dos números.
   * @param a Primer número.
   * @param b Segundo número.
   * @returns El MCD de a y b.
   */
  private mcd(a: number, b: number): number {
    return b === 0 ? a : this.mcd(b, a % b);
  }

  /**
   * Convierte el número racional a una cadena de texto.
   * @returns Representación en cadena del número racional.
   */
  toString(): string {
    let numerator = this.numerator;
    let denominator = this.denominator;
    // Asegurar que el signo negativo siempre esté en el numerador
    if (denominator < 0) {
      numerator *= -1;
      denominator *= -1;
    }
    // Si el denominador es 1, solo devuelve el numerador para representar un número entero.
    if (denominator === 1) {
      return `${numerator}`;
    }
    return `${numerator}/${denominator}`;
  }
}
