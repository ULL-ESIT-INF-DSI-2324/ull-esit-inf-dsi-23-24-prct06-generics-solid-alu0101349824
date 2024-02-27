import "mocha";
import { expect } from "chai";
import { Item, Box } from "../src/ejercicio-1";

describe("La mudanza", () => {
  it("Debe permitir añadir y listar enseres", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    box.listItems(); // Debería imprimir 'Libro'
    expect(box.findItem("Libro")).not.to.be.undefined;
  });

  it("Debe permitir crear un objeto con todas sus propiedades", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro", weight: 1, fragile: true, value: 10 });
    expect(box).to.have.property("contents");
    expect(box).to.have.property("addItem");
    expect(box).to.have.property("removeItem");
    expect(box).to.have.property("listItems");
    expect(box).to.have.property("findItem");
    expect(box.findItem("Libro")).to.have.property("name", "Libro");
    expect(box.findItem("Libro")).to.have.property("fragile", true);
    expect(box.findItem("Libro")).to.have.property("weight", 1);
    expect(box.findItem("Libro")).to.have.property("value", 10);
  });

  it("Debe permitir eliminar enseres", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    box.removeItem("Libro");
    expect(box.findItem("Libro")).to.be.undefined;
  });

  it("Debe encontrar enseres por su nombre", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    const item = box.findItem("Libro");
    expect(item).not.to.be.undefined;
  });

  it("No puede añadir el mismo tipo de enser en una caja", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    // Intento de añadir otro enser con el mismo nombre debería lanzar un error
    expect(() => box.addItem({ name: "Libro" })).to.throw(
      "El enser ya existe en la caja.",
    );
  });

  it("No puede eliminar un enser que no existe", () => {
    const box = new Box<Item>();
    // Intento de eliminar un enser que no existe debería lanzar un error
    expect(() => box.removeItem("Libro")).to.throw(
      "El enser no existe en la caja.",
    );
  });
});
