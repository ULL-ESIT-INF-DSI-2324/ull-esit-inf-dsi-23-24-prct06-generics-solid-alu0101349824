/**
 * @module Ejercicio 2: Facturas en diferentes formatos.
 * @file ejercicio-2.ts
 * @brief Programa que muestra cómo se pueden crear diferentes tipos de facturas
 * con diferentes formatos (PDF, HTML, etc.) y que todas tengan un método común
 * para generar la factura.
 * @description El requerimiento de que el diseño del sistema permita añadir nuevos formatos de generación de facturas sin necesidad de modificar el resto del código implementado se alinea directamente con el `Principio de Abierto/Cerrado (Open/Closed Principle)`, uno de los cinco principios SOLID de la programación orientada a objetos.
 *
 * El ejercicio propuesto ha sido abordado con la intención de demostrar cómo se pueden gestionar facturas en diferentes formatos, siguiendo el Principio de Abierto/Cerrado, uno de los pilares SOLID, que promueve la extensibilidad de las clases sin necesidad de modificar el código existente. Para lograr esto, se ha definido una interfaz `IFactura` que establece un contrato común para la generación de facturas, garantizando que cualquier clase que la implemente provea su propio método `generarFactura`. Este enfoque permite la creación de diversas representaciones de facturas, como PDF y HTML en este caso, cada una con características específicas como `metadatosPDF` y `estilosCSS`, respectivamente, sin alterar la definición inicial de la interfaz. La clase base `Factura` actúa como un fundamento para almacenar información común como el cliente y el total de la factura, mientras que las clases `FacturaPDF` y `FacturaHTML` extienden esta base incorporando los detalles específicos de cada formato y cumpliendo con el contrato de la interfaz mediante la implementación del método `generarFactura`. Esta estructura no solo facilita la adición de nuevos formatos de factura en el futuro, sino que también promueve un diseño limpio y mantenible, respetando los principios SOLID y asegurando que el sistema sea robusto, flexible y fácil de extender.
 */

/**
 * Interfaz para definir el comportamiento de las facturas.
 * Esta interfaz permite que las clases que la implementen
 * tengan un método para generar la factura.
 * Esto permite que se puedan crear diferentes tipos de facturas
 * con diferentes formatos (PDF, HTML, etc.) y que todas tengan
 * un método común para generar la factura.
 * @method generarFactura Método para generar la factura.
 */
export interface IFactura {
  generarFactura(): string;
}

/**
 * Clase base para la información común de una factura.
 * Esta clase no implementa la interfaz IFactura, ya que no
 * tiene un método para generar la factura. En cambio, las
 * clases que hereden de esta clase sí implementarán la interfaz
 * y tendrán un método para generar la factura.
 */
export class Factura {
  /**
   * Constructor de la clase Factura.
   * @param cliente Nombre del cliente.
   * @param total Total de la factura.
   */
  constructor(
    public cliente: string,
    public total: number,
  ) {}
}

/**
 * Generación de factura en formato PDF.
 * Esta clase hereda de la clase Factura y además implementa
 * la interfaz IFactura, por lo que tiene un método para generar
 * la factura.
 * @param metadatosPDF Atributo específico para el formato PDF. Son los metadatos del PDF.
 * @method generarFactura Método para generar la factura.
 */
export class FacturaPDF extends Factura implements IFactura {
  /**
   * Atributo específico para el formato PDF.
   */
  metadatosPDF: string;

  /**
   * Constructor de la clase FacturaPDF.
   * @param cliente Nombre del cliente.
   * @param total Total de la factura.
   * @param metadatosPDF Atributo específico para el formato PDF. Son los metadatos del PDF.
   */
  constructor(cliente: string, total: number, metadatosPDF: string) {
    super(cliente, total);
    // Atributo específico para el formato PDF.
    this.metadatosPDF = metadatosPDF;
  }

  /**
   * Método para generar la factura.
   * @returns Devuelve la factura en formato PDF.
   */
  generarFactura(): string {
    return `Factura PDF para ${this.cliente} con total ${this.total} y con metadatos ${this.metadatosPDF}`;
  }
}

/**
 * Generación de factura en formato HTML.
 * Esta clase hereda de la clase Factura y además implementa la interfaz IFactura,
 * por lo que tiene un método para generar la factura.
 * @param estilosCSS Atributo específico para el formato HTML. Son los estilos CSS del HTML.
 * @method generarFactura Método para generar la factura.
 */
export class FacturaHTML extends Factura implements IFactura {
  /**
   * Atributo específico para el formato HTML.
   */
  estilosCSS: string;

  /**
   * Constructor de la clase FacturaHTML.
   * @param cliente Nombre del cliente.
   * @param total Total de la factura.
   * @param estilosCSS Atributo específico para el formato HTML. Son los estilos CSS del HTML.
   */
  constructor(cliente: string, total: number, estilosCSS: string) {
    super(cliente, total);
    this.estilosCSS = estilosCSS;
  }

  /**
   * Método para generar la factura.
   * @returns Devuelve la factura en formato HTML.
   */
  generarFactura(): string {
    return `Factura HTML para ${this.cliente} con total ${this.total} y con estilos ${this.estilosCSS}`;
  }
}
