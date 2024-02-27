/**
 * @module Ejercicio 1: La mudanza.
 * @file ejercicio-1.ts
 * @brief Programa que simula una caja que puede contener varios enseres.
 * @description He decidido abordar el ejercicio de la mudanza creando una interfaz `Item` y una clase `Box<T extends Item>` para modelar la relación entre los enseres y las cajas donde se almacenan. Elegí una interfaz para `Item` porque quería definir un contrato para los objetos que podrían almacenarse en las cajas, asegurándome de que todos los enseres tuvieran un nombre, peso, fragilidad y valor, aunque permití que peso, fragilidad y valor fueran opcionales para dar flexibilidad en caso de que no toda la información esté disponible para cada enser. La decisión de hacer la clase `Box` genérica, extendiendo `Item`, fue para permitir que la caja almacene cualquier tipo de enser, proporcionando así una solución más versátil y reutilizable. Utilicé un arreglo para `contents` para almacenar los enseres, ya que esta estructura de datos facilita añadir, buscar y eliminar elementos. Implementé el método `addItem` para añadir enseres a la caja, incluyendo una comprobación para evitar duplicados, lo cual es importante para mantener la consistencia de los datos y evitar errores lógicos. Para eliminar enseres, desarrollé `removeItem`, que busca el enser por nombre y lo elimina si lo encuentra, lanzando un error si el enser no existe para informar al usuario de la operación fallida. Decidí que `listItems` debería imprimir todos los atributos de cada enser, usando el operador de coalescencia nula para manejar elegante y eficientemente los atributos opcionales, mostrando "N/A" cuando un atributo no está definido. Finalmente, `findItem` fue diseñado para buscar enseres basándose en cualquier atributo, haciendo el método extremadamente flexible y capaz de devolver múltiples enseres que coincidan con el criterio de búsqueda, lo cual consideré útil para situaciones donde se necesite filtrar enseres basándose en características específicas. En general, mi enfoque ha sido crear un sistema que siga el método SOLID, empleando características de TypeScript como genéricos y el operador de coalescencia nula para hacer el código más seguro y mantenible.
 */

/**
 * Representa un enser que puede ser almacenado en una caja.
 * @property name El nombre del enser.
 * @property weight El peso del enser.
 * @property fragile Indica si el enser es frágil.
 * @property value El valor del enser.
 */
export interface Item {
  name: string;
  weight?: number;
  fragile?: boolean;
  value?: number;
}

/**
 * Representa una caja que puede contener varios enseres.
 * @property T El tipo de enser que puede contener la caja.
 * @property contents Los enseres contenidos en la caja.
 * @method addItem Añade un enser a la caja.
 * @method removeItem Elimina un enser de la caja por su nombre.
 * @method listItems Imprime por consola los enseres contenidos en la caja.
 * @method findItem Busca un enser en la caja por su nombre.
 * @throws Error si se intenta añadir un enser duplicado.
 * @returns El enser encontrado o undefined si no se encuentra.
 */
export class Box<T extends Item> {
  private contents: T[] = [];

  /**
   * Añade un enser a la caja.
   * @param item El enser a añadir.
   * @throws Error si se intenta añadir un enser duplicado.
   */
  addItem(item: T): void {
    const isDuplicate = this.contents.some(
      (existingItem) => existingItem.name === item.name,
    );
    if (!isDuplicate) {
      this.contents.push(item);
    } else {
      throw new Error("El enser ya existe en la caja.");
    }
  }

  /**
   * Elimina un enser de la caja por su nombre.
   * @param name El nombre del enser a eliminar.
   * @throws Error si no se encuentra el enser.
   */
  removeItem(name: string): void {
    const index = this.contents.findIndex((item) => item.name === name);
    if (index !== -1) {
      this.contents.splice(index, 1);
    } else {
      throw new Error("El enser no existe en la caja.");
    }
  }

  /**
   * Imprime por consola los enseres contenidos en la caja.
   * Imprime el nombre, el peso, si es frágil y el valor de cada enser.
   * Hay que tener cuenta que el enser puede no tener todos los atributos.
   * Si un atributo no está definido, se imprime "N/A".
   */
  listItems(): void {
    this.contents.forEach((item) => {
      console.log(
        `Nombre: ${item.name}, Peso: ${item.weight ?? "N/A"}, Frágil: ${item.fragile ?? "N/A"}, Valor: ${item.value ?? "N/A"}`,
      );
    });
  }

  /**
   * Busca un enser en la caja por uno de sus atributos.
   * Puede buscar por nombre, por peso, por si es frágil o por su valor.
   * Si hay más de un enser que cumple la condición, devuelve una lista con todos los enseres.
   * @param key El atributo por el que buscar. Puede ser 'name', 'weight', 'fragile' o 'value'.
   * @param value El valor del atributo por el que buscar. Puede ser un string, un número o un booleano.
   * @returns El enser o enseres encontrados.
   */
  findItem(key: keyof T, value: T[keyof T]): T[] {
    return this.contents.filter((item) => item[key] === value);
  }
}
