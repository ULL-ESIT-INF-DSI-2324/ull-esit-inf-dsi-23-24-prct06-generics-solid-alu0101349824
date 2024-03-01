/**
 * @module Ejercicio 3: Gestor de ficheros.
 * @file ejercicio-3.ts example.txt
 * @brief Programa que lee el contenido de un archivo y añade contenido al final del mismo.
 * @description El código fuente propuesto para el gestor de ficheros presenta potencialmente una violación del `Principio de Responsabilidad Única (Single Responsibility Principle - SRP)`, el cual es uno de los principios SOLID. Este principio establece que una clase debe tener una y solo una razón para cambiar, lo que significa que debería tener solo una tarea o responsabilidad. En el caso de `FileManager`, está manejando tanto la lectura como la escritura de archivos, lo cual podría considerarse más de una responsabilidad, especialmente si pensamos en extender sus funcionalidades en el futuro (por ejemplo, añadiendo métodos para borrar archivos, copiar archivos, etc.).
 *
 * Para solucionar este problema, se propone la creación de una interfaz `IFileHandler` que defina los métodos `readFile` y `appendToFile`, y una clase `FileHandler` que implemente dicha interfaz. De esta manera, `FileManager` podría delegar la responsabilidad de leer y escribir archivos a `FileHandler`, manteniendo su responsabilidad única de manejar la lógica de negocio relacionada con los archivos (SPR). Además, esta solución permitiría extender las funcionalidades de `FileHandler` sin necesidad de modificar FileManager (OCP).
 */

/**
 * Importación de módulos y clases necesarias.
 * @requires fs Módulo de Node.js para manejar archivos.
 */
import * as fs from "fs";

/**
 * Interfaz que define los métodos para manejar archivos.
 * @interface IFileHandler
 * @description La interfaz IFileHandler define dos métodos para manejar archivos: readFile para leer el contenido de un archivo y appendToFile para añadir contenido al final del mismo.
 * @method readFile Lee el contenido de un archivo y lo devuelve como un string.
 * @method appendToFile Añade datos al final de un archivo.
 */
export interface IFileHandler {
  /**
   * Lee el contenido de un archivo.
   * @param filePath Ruta del archivo a leer.
   * @returns Contenido del archivo leído.
   */
  readFile(filePath: string): string;
  /**
   * Añade datos al final de un archivo.
   * @param filePath Ruta del archivo a añadir.
   * @param data Datos a añadir.
   */
  appendToFile(filePath: string, data: string): void;
}

/**
 * Implementación concreta de la interfaz para manejar archivos usando Node.js
 * @class FileHandler
 * @description La clase FileHandler implementa la interfaz IFileHandler y proporciona la funcionalidad para leer y añadir contenido a un archivo.
 * @method readFile Lee el contenido de un archivo usando fs.readFileSync.
 * @method appendToFile Añade datos al final de un archivo usando fs.appendFileSync.
 */
export class FileHandler implements IFileHandler {
  /**
   * Lee el contenido de un archivo.
   * @param filePath Ruta del archivo a leer.
   * @returns Contenido del archivo leído.
   * @throws Error si hay un problema al leer el archivo.
   */
  public readFile(filePath: string): string {
    try {
      const content: string = fs.readFileSync(filePath, "utf-8");
      return content;
    } catch (error) {
      console.error("Error al leer el archivo:", error.message);
      return "";
    }
  }

  /**
   * Añade datos al final de un archivo.
   * @param filePath Ruta del archivo a añadir.
   * @param data Datos a añadir.
   * @throws Error si hay un problema al añadir contenido al archivo.
   */
  public appendToFile(filePath: string, data: string): void {
    try {
      fs.appendFileSync(filePath, data + "\n", "utf-8");
      console.log("Contenido añadido al archivo exitosamente.");
    } catch (error) {
      console.error("Error al añadir contenido al archivo:", error.message);
    }
  }
}

// Código cliente
/**
 * Uso de la clase `FileHandler` para leer y añadir contenido a un archivo.
 */
export const fileHandler: IFileHandler = new FileHandler();
export const filePath: string = "src/example.txt";

/**
 * Leyendo contenido actual para verificar.
 */
export const currentContent = fileHandler.readFile(filePath);
console.log("Contenido actual:", currentContent);

/**
 * Añadiendo contenido nuevo al archivo.
 */
export const newData = "Este es contenido nuevo que se añadirá al archivo.";
fileHandler.appendToFile(filePath, newData);

/**
 * Leyendo contenido actualizado para verificar.
 */
export const updatedContent = fileHandler.readFile(filePath);
console.log("Contenido actualizado:", updatedContent);
