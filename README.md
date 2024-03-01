[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/G0JN8jPZ)

### Laura Álvarez Zamora - 2023/24

---

# Práctica 6: Clases e interfaces genéricas. Principios SOLID.

La Práctica 6 se centra en el uso avanzado de TypeScript para la implementación de clases e interfaces
genéricas, apoyándose en los principios SOLID de diseño orientado a objetos. Este informe desglosa 
el enunciado propuesto, ofreciendo una visión general de los ejercicios a realizar, los aprendizajes
clave en TypeScript, los desafíos encontrados durante su desarrollo y las soluciones adoptadas, 
culminando con una conclusión global.

## Descripción General

La práctica consta de una serie de ejercicios que buscan profundizar en el manejo de clases e interfaces 
genéricas en TypeScript, aplicando los principios SOLID para un diseño de software robusto y mantenible. 
Se incluyen tareas previas como la configuración de un repositorio en GitHub Classroom y la implementación 
de herramientas para el cubrimiento del código fuente. Cada ejercicio propuesto aborda diferentes aspectos 
de la programación orientada a objetos y el uso de TypeScript, desde la gestión de enseres en una mudanza 
hasta el diseño de un sistema de notificaciones.
Se ha hecho uso de las herramientas de Coveralls e Istanbul para la evaluación de la cobertura de código:

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101349824/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2324/ull-esit-inf-dsi-23-24-prct06-generics-solid-alu0101349824?branch=main)

## Aprendizajes Clave sobre TypeScript

- **Uso de Clases e Interfaces Genéricas:** Se aprende a definir y utilizar clases e interfaces con 
tipos genéricos para crear estructuras de datos flexibles y reutilizables.
- **Aplicación de Principios SOLID:** La práctica enfatiza la importancia de estos principios en el 
diseño de software, especialmente:
  - **Single Responsibility:** Separar las funcionalidades en diferentes clases o interfaces para que 
  cada una tenga una única responsabilidad.
  - **Open/Closed:** Diseñar entidades de software que estén abiertas para la extensión, pero cerradas 
  para la modificación.
  - **Liskov Substitution:** Garantizar que las clases derivadas puedan ser utilizadas en lugar de sus 
  clases base sin afectar la correcta ejecución del programa.
  - **Interface Segregation:** Evitar interfaces que obliguen a las clases a implementar métodos que 
  no utilizan.
  - **Dependency Inversion:** Depender de abstracciones y no de concreciones, lo que facilita el 
  mantenimiento y la escalabilidad del software.

## Desafíos y Soluciones

- **Implementación de Genéricos y SOLID:** Un desafío fue cómo implementar soluciones que respeten 
los principios SOLID sin comprometer la flexibilidad que ofrecen los genéricos. La solución implicó 
una cuidadosa planificación del diseño y la arquitectura del software, asegurando que las abstracciones 
y las implementaciones sean adecuadas para los casos de uso previstos.
- **Pruebas Unitarias y Cobertura de Código:** Asegurar una cobertura de código completa fue complicado, 
especialmente al manejar casos de error y entradas no válidas. La adopción de una metodología TDD (Desarrollo 
Dirigido por Pruebas) ayuda a enfocar el desarrollo en la creación de código testeable y robusto desde 
el inicio.
- **Integración de Herramientas Externas:** La configuración de herramientas como Istanbul y Coveralls 
para la evaluación de la cobertura de código presentó dificultades técnicas. El principal problema tenía 
que ver con la visivilidad del repositorio. La solución fue seguir detenidamente las guías proporcionadas, 
ajustando la configuración del proyecto.

## Conclusión

La Práctica 6 ofrece una oportunidad valiosa para aplicar conceptos avanzados de TypeScript en un contexto 
de diseño orientado a objetos, reforzando la importancia de los principios SOLID en el desarrollo de software. 
A través de los ejercicios propuestos, no solo mejoré mi dominio de TypeScript, sino que también adquierí 
habilidades cruciales en el diseño y la implementación de sistemas de software complejos y mantenibles. 
Este informe ha desglosado los componentes clave del enunciado, destacando los aprendizajes, desafíos 
y soluciones encontrados, con el objetivo de proporcionar una comprensión clara y detallada de los 
objetivos y expectativas de la práctica.
