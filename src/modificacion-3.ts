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
  add(a: T, b: T): T;
  subtract(a: T, b: T): T;
  multiply(a: T, b: T): T;
  divide(a: T, b: T): T;
}

/**
 * Clase que representa un número complejo.
 */
export class Complex implements Arithmeticable<Complex> {
  constructor(
    public real: number,
    public imaginary: number,
  ) {}

  add(other: Complex): Complex {
    return new Complex(
      this.real + other.real,
      this.imaginary + other.imaginary,
    );
  }

  subtract(other: Complex): Complex {
    return new Complex(
      this.real - other.real,
      this.imaginary - other.imaginary,
    );
  }

  multiply(other: Complex): Complex {
    // (a+bi)(c+di) = (ac-bd) + (ad+bc)i
    return new Complex(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real,
    );
  }

  divide(other: Complex): Complex {
    // (a+bi)/(c+di) = [(ac+bd)/(c^2+d^2)] + [(bc-ad)/(c^2+d^2)]i
    const denominator = other.real ** 2 + other.imaginary ** 2;
    return new Complex(
      (this.real * other.real + this.imaginary * other.imaginary) / denominator,
      (this.imaginary * other.real - this.real * other.imaginary) / denominator,
    );
  }

  toString(): string {
    // Asegura que el signo correcto se añade entre la parte real e imaginaria
    const sign = this.imaginary >= 0 ? "+" : "";
    return `${this.real}${sign}${this.imaginary}i`;
  }
}

/**
 * Clase que representa un número racional.
 */
export class Rational implements Arithmeticable<Rational> {
  constructor(
    public numerator: number,
    public denominator: number,
  ) {
    if (denominator === 0) {
      throw new Error("El denominador no puede ser cero.");
    }
    this.simplify();
  }

  add(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator + other.numerator * this.denominator,
      this.denominator * other.denominator,
    ).simplify();
  }

  subtract(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator - other.numerator * this.denominator,
      this.denominator * other.denominator,
    ).simplify();
  }

  multiply(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator,
    ).simplify();
  }

  divide(other: Rational): Rational {
    if (other.numerator === 0) {
      throw new Error("El denominador no puede ser cero.");
    }
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator,
    ).simplify();
  }

  /**
   * Simplifica el número racional a su forma más simple.
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
   */
  toString(): string {
    // Si el denominador es 1, solo devuelve el numerador para representar un número entero.
    if (this.denominator === 1) {
      return `${this.numerator}`;
    }
    return `${this.numerator}/${this.denominator}`;
  }
}
