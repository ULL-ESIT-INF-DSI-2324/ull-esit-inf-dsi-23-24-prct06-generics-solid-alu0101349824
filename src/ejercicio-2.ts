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
