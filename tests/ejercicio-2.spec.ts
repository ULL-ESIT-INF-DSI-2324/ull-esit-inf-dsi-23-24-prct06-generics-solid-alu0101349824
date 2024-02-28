import "mocha";
import { expect } from "chai";
import { FacturaPDF, FacturaHTML } from "../src/ejercicio-2";

describe("Facturas en diferentes formatos", () => {
  describe("Facturas en PDF", () => {
    it("Debe generar una factura en formato PDF correctamente para una empresa", () => {
      const facturaPDF = new FacturaPDF(
        "Acme Corp.",
        1500,
        "Título: Factura N° 12345, Autor: Empresa XYZ, Seguridad: Confidencial",
      );
      const resultado = facturaPDF.generarFactura();
      expect(resultado).to.equal(
        "Factura PDF para Acme Corp. con total 1500 y con metadatos Título: Factura N° 12345, Autor: Empresa XYZ, Seguridad: Confidencial",
      );
    });

    it("Debe generar una factura en formato PDF correctamente para una persona", () => {
      const facturaPDF = new FacturaPDF(
        "Juan Pérez",
        200,
        "Título: Factura N° 54321, Autor: Juan Pérez, Seguridad: Confidencial",
      );
      const resultado = facturaPDF.generarFactura();
      expect(resultado).to.equal(
        "Factura PDF para Juan Pérez con total 200 y con metadatos Título: Factura N° 54321, Autor: Juan Pérez, Seguridad: Confidencial",
      );
    });
  });

  describe("Facturas en HTML", () => {
    it("Debe generar una factura en formato HTML correctamente", () => {
      const facturaHTML = new FacturaHTML(
        "Juan Pérez",
        200,
        "body { font-family: 'Arial', sans-serif; color: #333; }",
      );
      const resultado = facturaHTML.generarFactura();
      expect(resultado).to.equal(
        `Factura HTML para Juan Pérez con total 200 y con estilos body { font-family: 'Arial', sans-serif; color: #333; }`,
      );
    });
  });
});
