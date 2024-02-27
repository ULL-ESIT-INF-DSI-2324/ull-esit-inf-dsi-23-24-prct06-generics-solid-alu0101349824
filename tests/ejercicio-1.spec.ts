import "mocha";
import { expect } from "chai";
import sinon from "sinon";
import { Item, Box } from "../src/ejercicio-1";

describe("La mudanza", () => {
  it("Debe permitir añadir un enser correctamente", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro", weight: 1, fragile: true, value: 10 });
    box.addItem({ name: "Cuaderno", weight: 1 });
    expect(box.findItem("name", "Libro")[0]).to.have.property("name", "Libro");
    expect(box.findItem("name", "Libro")).not.to.be.empty;
    expect(box.findItem("name", "Cuaderno")[0]).to.have.property(
      "name",
      "Cuaderno",
    );
    expect(box.findItem("name", "Cuaderno")).not.to.be.empty;
  });

  describe("Método listItems() para imprimir por pantalla", () => {
    let sandbox: sinon.SinonSandbox;
    let consoleSpy: sinon.SinonSpy;
    beforeEach(() => {
      // Crea un sandbox para restaurar el estado original después de cada prueba
      sandbox = sinon.createSandbox();
      // Espía las llamadas a console.log
      consoleSpy = sandbox.spy(console, "log");
    });
    afterEach(() => {
      // Restaura el sandbox para limpiar el espía
      sandbox.restore();
    });

    it("Debe permitir listar enseres correctamente", () => {
      const box = new Box<Item>();
      box.addItem({ name: "Libro", weight: 1, fragile: false, value: 10 });
      box.addItem({ name: "Vaso", weight: 0.5, fragile: true, value: 5 });
      box.listItems(); // Debería imprimir por consola los enseres añadidos.
      // Verifica que console.log se llamó con la información correcta
      expect(
        consoleSpy.calledWith(
          `Nombre: Libro, Peso: 1, Frágil: false, Valor: 10`,
        ),
      ).to.be.true;
      expect(
        consoleSpy.calledWith(
          `Nombre: Vaso, Peso: 0.5, Frágil: true, Valor: 5`,
        ),
      ).to.be.true;
    });

    it("No debe imprimir nada si la caja está vacía", () => {
      const box = new Box<Item>();
      box.listItems(); // No debería imprimir nada.
      // Verifica que console.log no se llamó
      expect(consoleSpy.called).to.be.false;
      expect(consoleSpy.callCount).to.equal(0);
      expect(consoleSpy.args).to.be.empty;
    });

    it("Debe imprimir correctamente enseres con atributos mixtos", () => {
      const box = new Box<Item>();
      box.addItem({ name: "Lámpara", weight: 2, fragile: true }); // Valor no definido
      box.addItem({ name: "Alfombra", value: 20 }); // Peso y fragilidad no definidos
      box.listItems(); // Debería imprimir por consola los enseres añadidos.
      expect(
        consoleSpy.calledWith(
          `Nombre: Lámpara, Peso: 2, Frágil: true, Valor: N/A`,
        ),
      ).to.be.true;
      expect(
        consoleSpy.calledWith(
          `Nombre: Alfombra, Peso: N/A, Frágil: N/A, Valor: 20`,
        ),
      ).to.be.true;
    });
  });

  it("Debe permitir crear un objeto con todas sus propiedades", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro", weight: 1, fragile: true, value: 10 });
    expect(box).to.have.property("contents");
    expect(box).to.have.property("addItem");
    expect(box).to.have.property("removeItem");
    expect(box).to.have.property("listItems");
    expect(box).to.have.property("findItem");
    expect(box.findItem("name", "Libro")[0]).to.have.property("name", "Libro");
    expect(box.findItem("fragile", true)[0]).to.have.property("fragile", true);
    expect(box.findItem("weight", 1)[0]).to.have.property("weight", 1);
    expect(box.findItem("value", 10)[0]).to.have.property("value", 10);
  });

  it("Debe permitir eliminar enseres", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    box.removeItem("Libro");
    expect(box.findItem("name", "Libro")).to.be.empty;
  });

  it("Debe encontrar enseres por su nombre", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    const item = box.findItem("name", "Libro");
    expect(item).not.to.be.undefined;
  });

  it("Debe encontrar enseres por su peso", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro", weight: 1 });
    const item = box.findItem("weight", 1);
    expect(item).not.to.be.undefined;
  });

  it("Debe encontrar enseres por su valor", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro", value: 10 });
    const item = box.findItem("value", 10);
    expect(item).not.to.be.undefined;
  });

  it("Debe encontrar enseres por su fragilidad", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro", fragile: true });
    const item = box.findItem("fragile", true);
    expect(item).not.to.be.undefined;
  });

  it("No puede añadir el mismo tipo de enser en una caja", () => {
    const box = new Box<Item>();
    box.addItem({ name: "Libro" });
    // Intento de añadir otro enser con el mismo nombre debería lanzar un error
    expect(() => box.addItem({ name: "Libro" })).to.throw(
      Error,
      "El enser ya existe en la caja.",
    );
  });

  it("No puede eliminar un enser que no existe", () => {
    const box = new Box<Item>();
    // Intento de eliminar un enser que no existe debería lanzar un error
    expect(() => box.removeItem("Libro")).to.throw(
      Error,
      "El enser no existe en la caja.",
    );
  });
});
