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
   */
  listItems(): void {
    this.contents.forEach((item) => console.log(item.name));
  }

  /**
   * Busca un enser en la caja por su nombre.
   * @param name El nombre del enser a buscar.
   * @returns El enser encontrado o undefined si no se encuentra.
   */
  findItem(name: string): T | undefined {
    return this.contents.find((item) => item.name === name);
  }
}
