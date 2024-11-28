# Design Patterns in JavaScript

## Descripción General
Este repositorio contiene implementaciones de diversos patrones de diseño utilizando JavaScript. El objetivo es proporcionar ejemplos claros y funcionales de los principales patrones de diseño, divididos en tres categorías principales.

## Estructura del Repositorio

### Patrones Creacionales
Patrones que se enfocan en mecanismos de creación de objetos.

| Patrón | Descripción |
|--------|-------------|
| Abstract Factory | Crea familias de objetos relacionados sin especificar su clase concreta |
| Builder | Construye objetos complejos paso a paso |
| Factory Method | Define una interfaz para crear objetos, pero deja que las subclases decidan la instancia |
| Prototype | Crea nuevos objetos clonando una instancia existente |
| Singleton | Garantiza que una clase tenga solo una instancia |

### Patrones Estructurales
Patrones que facilitan la composición de clases y objetos.

| Patrón | Descripción |
|--------|-------------|
| Adapter | Permite la colaboración entre interfaces incompatibles |
| Decorator | Añade nuevas responsabilidades a objetos de forma dinámica |

### Patrones de Comportamiento
Patrones que se centran en la comunicación entre objetos.

| Patrón | Descripción |
|--------|-------------|
| Observer | Define una dependencia uno a muchos entre objetos |
| State | Permite a un objeto alterar su comportamiento cuando su estado interno cambia |
| Strategy | Define una familia de algoritmos intercambiables |
| Template Method | Define el esqueleto de un algoritmo, delegando algunos pasos a las subclases |

## Estructura de Carpetas
````
Patrones de diseño/
│
├── Patrones creacionales/
│   ├── abstract-factory-pattern/
│   ├── factory-pattern/
│   ├── builder-pattern/
│   ├── prototype-pattern/
│   └── singleton-pattern/
│
├── Patrones de comportamiento/
│   ├── observer-pattern/
│   ├── state-pattern/
│   ├── strategy-pattern/
│   ├── observer-pattern/
│   └── template-pattern/
│
├── Patrones estructurales/
│   ├── adapter-pattern/
│   └── decorator-pattern/
│
├── README.md
````
## Instrucciones de Uso
1. Navega a la carpeta del patrón de diseño que te interese
2. Revisa el README específico de cada patrón
3. Ejecuta los ejemplos con `npm start`

## Requisitos
- Node.js (versión 14 o superior)
- npm