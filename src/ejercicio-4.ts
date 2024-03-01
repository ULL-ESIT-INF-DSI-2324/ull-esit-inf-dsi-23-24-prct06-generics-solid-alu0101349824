/**
 * @module Ejercicio 4: Impresoras y escáneres.
 * @file ejercicio-4.ts
 * @brief Programa que simula el funcionamiento de una impresora y un escáner.
 * @description El código propuesto viola el **Principio de Segregación de Interfaces (Interface Segregation Principle - ISP)** de los principios SOLID, que establece que ningún cliente debería verse forzado a depender de métodos que no utiliza. En este caso, la interfaz `PrintableScannable` obliga a las clases `Printer` y `Scanner` a implementar métodos (`scan` en `Printer` y `print` en `Scanner`) que no son relevantes para sus funcionalidades específicas. Esto resulta en implementaciones vacías o no significativas, lo cual es una clara señal de que se está violando ISP.
 *
 * Para solucionar este problema, se propone crear dos interfaces separadas, `Printable` y `Scannable`, que contengan los métodos `print` y `scan` respectivamente. Luego, se implementan estas interfaces en las clases `Printer` y `Scanner`, que proporcionan la funcionalidad específica para imprimir y escanear. Finalmente, se crea una clase `PrinterScanner` que implementa ambas interfaces y proporciona la funcionalidad para imprimir y escanear. De esta manera, se cumple con el principio ISP, ya que cada clase implementa solo los métodos que son relevantes para su funcionalidad específica. Además, se mantiene la flexibilidad para que las clases puedan implementar una o ambas interfaces según sea necesario.
 */

/**
 * Interfaz para funcionalidad de impresión.
 * @interface Printable
 * @method print Método para imprimir.
 */
export interface Printable {
  /**
   * Método para imprimir.
   */
  print(): void;
}

/**
 * Interfaz para funcionalidad de escaneo
 * @interface Scannable
 * @method scan Método para escanear.
 */
export interface Scannable {
  /**
   * Método para escanear.
   */
  scan(): void;
}

/**
 * Implementación específica para una impresora.
 * @class Printer
 * @description La clase `Printer` implementa la interfaz `Printable` y proporciona la funcionalidad para imprimir.
 * @method print Imprime un documento.
 */
export class Printer implements Printable {
  /**
   * Imprime un documento.
   */
  print(): void {
    console.log("Imprimiendo...");
  }
}

/**
 * Implementación específica para un escáner.
 * @class Scanner
 * @description La clase `Scanner` implementa la interfaz `Scannable` y proporciona la funcionalidad para escanear.
 * @method scan Escanea un documento.
 */
export class Scanner implements Scannable {
  /**
   * Escanea un documento.
   */
  scan(): void {
    console.log("Escaneando...");
  }
}

/**
 * Implementación para un dispositivo que puede imprimir y escanear.
 * @class PrinterScanner
 * @description La clase `PrinterScanner` implementa las interfaces `Printable` y `Scannable` y proporciona la funcionalidad para imprimir y escanear.
 * @method print Imprime un documento.
 * @method scan Escanea un documento.
 */
export class PrinterScanner implements Printable, Scannable {
  /**
   * Imprime un documento.
   */
  print(): void {
    console.log("Imprimiendo...");
  }

  /**
   * Escanea un documento.
   */
  scan(): void {
    console.log("Escaneando...");
  }
}

// Código cliente
/**
 * Uso de las clase `Printer` para imprimir.
 * @description Se crea una instancia de la clase y se llama al método correspondiente.
 * @example printer.print(); // Impresión
 */
export const printer = new Printer();
printer.print(); // Impresión

/**
 * Uso de las clase `Scanner` para escanear.
 * @description Se crea una instancia de la clase y se llama al método correspondiente.
 * @example scanner.scan(); // Escaneo
 */
export const scanner = new Scanner();
scanner.scan(); // Escaneo

/**
 * Uso de las clase `PrinterScanner` para imprimir y escanear.
 * @description Se crea una instancia de la clase y se llama a los métodos correspondientes.
 * @example printerScanner.print(); // Impresión
 * @example printerScanner.scan(); // Escaneo
 */
export const printerScanner = new PrinterScanner();
printerScanner.print(); // Impresión
printerScanner.scan(); // Escaneo
