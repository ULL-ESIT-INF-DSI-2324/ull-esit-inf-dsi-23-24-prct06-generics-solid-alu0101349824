import "mocha";
import { expect } from "chai";
import { Complex, Rational } from "../src/modificacion-3";

describe("Modificación 3", () => {
  describe("Números Complejos", () => {
    it("Debe sumar dos números complejos correctamente", () => {
      const a = new Complex(3, 4);
      const b = new Complex(5, 6);
      expect(a.add(b).toString()).to.equal("8+10i");
    });

    it("Debe restar dos números complejos correctamente", () => {
      const a = new Complex(3, 4);
      const b = new Complex(5, 6);
      expect(a.subtract(b).toString()).to.equal("-2-2i");
    });

    it("Debe multiplicar dos números complejos correctamente", () => {
      const a = new Complex(3, 4);
      const b = new Complex(5, 6);
      expect(a.multiply(b).toString()).to.equal("-9+38i");
    });

    it("Debe dividir dos números complejos correctamente", () => {
      const a = new Complex(3, 4);
      const c = new Complex(7, 8);
      expect(a.divide(c).toString()).to.equal(
        "0.4690265486725664+0.035398230088495575i",
      );
    });
  });

  describe("Números Racionales", () => {
    it("Debe sumar dos números racionales correctamente", () => {
      const a = new Rational(1, 3);
      const b = new Rational(2, 3);
      expect(a.add(b).toString()).to.equal("1");
    });

    it("Debe restar dos números racionales correctamente", () => {
      const a = new Rational(1, 3);
      const b = new Rational(2, 3);
      expect(a.subtract(b).toString()).to.equal("-1/3");
    });

    it("Debe multiplicar dos números racionales correctamente", () => {
      const a = new Rational(1, 3);
      const b = new Rational(2, 3);
      expect(a.multiply(b).toString()).to.equal("2/9");
    });

    it("Debe manejar la división por un racional que resulta en denominador cero", () => {
      const a = new Rational(1, 3);
      const c = new Rational(0, 1);
      expect(() => a.divide(c).toString()).to.throw(
        "El denominador no puede ser cero.",
        );
      });
      
      it("Debe simplificar un racional", () => {
        const rational = new Rational(3, 6);
        expect(rational.numerator).to.be.eql("1");
        expect(rational.denominator).to.be.eql("3");
      });

    it("Debe mandar un error cuando el denominador es cero", () => {
      expect(() => new Rational(1, 0)).to.throw(
        "El denominador no puede ser cero.",
      );
    });
  });
});
