# Abstract Factory Pattern for Phone Management

## Descripción General
Este proyecto demuestra el patrón de diseño Abstract Factory utilizando un Sistema de Gestión de Teléfonos. El sistema permite realizar acciones tipo CRUD para diversos tipos de teléfonos y añadir accesorios a sus familias de productos.

## Patrón de Diseño: Abstract Factory
El patrón Abstract Factory proporciona una interfaz para crear familias de objetos relacionados o dependientes sin especificar sus clases concretas. Permite trabajar con diferentes familias de productos sin acoplar el código a implementaciones específicas.

### Componentes Principales
- **Fábrica Abstracta (PhoneFactory)**: Define una interfaz para crear familias de productos relacionados
- **Fábricas Concretas**: 
  1. **MotorolaFactory**: Crea productos de la familia Motorola
  2. **NokiaFactory**: Crea productos de la familia Nokia
  3. **SamsungFactory**: Crea productos de la familia Samsung
- **Productos Abstractos**: 
  1. **Phone**: Interfaz base para teléfonos
  2. **Accessory**: Interfaz base para accesorios

### Características de las Familias de Productos
1. **Motorola**: Familia de teléfonos con características específicas
2. **Nokia**: Familia de teléfonos con su propio diseño y accesorios
3. **Samsung**: Familia de teléfonos con tecnología distintiva

## Estructura del Proyecto
```
abstract-factory-pattern/
│
├── src/
│   ├── database/
│   │   └── phones.json
│   │
│   ├── factories/
│   │   ├── PhoneFactory.js
│   │   ├── MotorolaFactory.js
│   │   ├── NokiaFactory.js
│   │   └── SamsungFactory.js
│   │
│   ├── models/
│   │   ├── Phone.js
│   |   └── Accessory.js
│   │
|   └── index.js
└── package.json
```