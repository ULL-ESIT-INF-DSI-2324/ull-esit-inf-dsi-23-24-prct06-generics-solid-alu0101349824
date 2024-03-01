/**
 * @module Ejercicio 5: Servicio de mensajería.
 * @file ejercicio-5.ts
 * @brief Programa que simula el envío de notificaciones por email y SMS.
 * @description El código propuesto presenta una violación del **Principio de Inversión de Dependencias (Dependency Inversion Principle - DIP)** de los principios SOLID. Este principio sugiere que las dependencias deben ser sobre abstracciones y no sobre concreciones. En este caso, la clase `Notifier` depende directamente de las implementaciones concretas `EmailService` y `ShortMessageService` para enviar notificaciones, lo que hace difícil extender el sistema con nuevos tipos de servicios de notificación sin modificar la clase `Notifier`.
 *
 * Este diseño mejora la adherencia a DIP al hacer que `Notifier` dependa de una abstracción (`INotificationService`) en lugar de detalles concretos (`EmailService`, `ShortMessageService`). Además, facilita la expansión del sistema para soportar nuevos métodos de notificación, ya que simplemente se pueden crear nuevas clases que implementen `INotificationService` sin necesidad de modificar las clases existentes, siguiendo el **Principio de Abierto/Cerrado (Open/Closed Principle)**. Además, el código cliente puede utilizar diferentes servicios de notificación sin necesidad de cambiar su implementación, lo que mejora la flexibilidad y la reutilización del código.
 */

/**
 * Interfaz `INotificationService` para el envío de notificaciones.
 * Declara el método `notify` para ser implementado por diferentes servicios.
 * @interface INotificationService
 * @method notify Método para enviar una notificación.
 */
interface INotificationService {
  /**
   * Método para enviar una notificación.
   * @param message Mensaje a enviar.
   */
  notify(message: string): void;
}

/**
 * Servicio de notificación por email.
 * Implementa la interfaz `INotificationService`.
 * @class EmailService
 * @implements INotificationService
 * @method notify Método para enviar una notificación por email.
 */
class EmailService implements INotificationService {
  /**
   * Envía una notificación por email.
   * @param message Mensaje a enviar.
   */
  notify(message: string): void {
    console.log(`Mandando notificación por email: ${message}`);
  }
}

/**
 * Servicio de notificación por SMS.
 * Implementa la interfaz `INotificationService`.
 * @class ShortMessageService
 * @implements INotificationService
 * @method notify Método para enviar una notificación por SMS.
 */
class ShortMessageService implements INotificationService {
  /**
   * Envía una notificación por SMS.
   * @param message Mensaje a enviar.
   */
  notify(message: string): void {
    console.log(`Mandando notificación por SMS: ${message}`);
  }
}

/**
 * Clase `Notifier` que utiliza servicios de notificación.
 * Depende de la abstracción `INotificationService` en lugar de implementaciones concretas.
 * @class Notifier
 * @method sendNotification Envía una notificación usando el servicio configurado.
 */
class Notifier {
  /**
   * Constructor de `Notifier`.
   * @param notificationService Servicio de notificación a utilizar.
   */
  constructor(private notificationService: INotificationService) {}

  /**
   * Envía una notificación usando el servicio configurado.
   * @param message Mensaje a enviar.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}

// Código cliente
/**
 * Uso de las clases `EmailService` y `ShortMessageService` para enviar notificaciones.
 * @description Se crea una instancia de la clase `Notifier` y se llama al método correspondiente.
 * @example emailNotifier.sendNotification("Hello World!");
 */
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

/**
 * Uso de las clases `EmailService` y `ShortMessageService` para enviar notificaciones.
 * @description Se crea una instancia de la clase `Notifier` y se llama al método correspondiente.
 * @example shortMessageNotifier.sendNotification("Hello World!");
 */
const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification("Hello World!");
