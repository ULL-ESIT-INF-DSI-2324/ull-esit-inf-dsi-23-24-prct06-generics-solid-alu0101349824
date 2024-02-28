import "mocha";
import { expect } from "chai";
import { BasicCalculator } from "../src/modificacion-1";

describe("Modificación 1", () => {
  const calculator = new BasicCalculator();

  it("Debe sumar dos números", () => {
    expect(calculator.add(5, 3)).to.equal(8);
  });

  it("Debe restar dos números", () => {
    expect(calculator.subtract(10, 4)).to.equal(6);
  });

  it("Debe multiplicar dos números", () => {
    expect(calculator.multiply(6, 7)).to.equal(42);
  });

  it("Debe dividir dos números", () => {
    expect(calculator.divide(8, 2)).to.equal(4);
  });

  it("No debe poder dividir por cero", () => {
    expect(() => calculator.divide(5, 0)).to.throw(
      "El denominador no puede ser cero.",
    );
  });
});
