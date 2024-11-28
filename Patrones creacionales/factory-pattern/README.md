# Factory Pattern for Phone Management

## Descripción General
Este proyecto demuestra el patrón de diseño Factory utilizando un Sistema de Gestión de Teléfonos. El sistema permite realizar acciones tipo CRUD para diversos tipos de teléfonos.

## Patrón de Diseño: Abstract Factory
El patrón Factory proporciona una interfaz para crear objetos en una superclase, mientras permite a las subclases alterar el tipo de objetos que se crearán.

### Componentes Principales
- **Fábrica (PhoneFactory)**: Define una super clase para crear la base de productos relacionados
- **Fábricas Concretas**: 
  1. **MotorolaFactory**: Crea productos Motorola a base de la super clase
  2. **NokiaFactory**: Crea productos Nokia a base de la super clase
  3. **SamsungFactory**: Crea productos Samsung a base de la super clase
- **Productos Abstractos**: 
  1. **Phone**: Interfaz base para teléfonos

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
│   │   └── Phone.js
│   │
|   └── index.js
└── package.json
```