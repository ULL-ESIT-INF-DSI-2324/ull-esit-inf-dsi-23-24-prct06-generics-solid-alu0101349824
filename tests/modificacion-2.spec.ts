import "mocha";
import { expect } from "chai";
import {
  ArithmeticableCollection,
  Arithmeticable,
} from "../src/modificacion-2";

describe("Modificación 2", () => {
  it("Debe permitir añadir y obtener un elemento correctamente", () => {
    const collection = new ArithmeticableCollection<Arithmeticable>();
    const item: Arithmeticable = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    };
    collection.addArithmeticable(item);
    expect(collection.getNumberOfArithmeticables()).to.equal(1);
    expect(collection.getArithmeticable(0)).to.equal(item);
  });

  it("Debe lanzar un error al intentar obtener un elemento con un índice fuera de límites", () => {
    const collection = new ArithmeticableCollection<Arithmeticable>();
    expect(() => collection.getArithmeticable(0)).to.throw(
      "Índice fuera del límite.",
    );
  });
});
