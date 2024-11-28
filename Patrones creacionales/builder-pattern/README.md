# Builder Pattern for Computer Construction

## Descripción General
Este proyecto demuestra el patrón de diseño Builder utilizando un Sistema de Construcción de Computadoras. El sistema permite armar computadoras para distintos usos, pudiendo añadir más características a las ya creadas.

## Patrón de Diseño: Builder
El patrón Builder permite construir objetos complejos paso a paso. Separa la construcción de un objeto complejo de su representación, permitiendo crear diferentes variaciones de un mismo objeto.

### Componentes Principales
- **Producto (Computer)**: La clase que representa la computadora con todos sus componentes
- **Builder Base (ComputerBuilder)**: Define la interfaz para construir las partes de la computadora
- **Builders Concretos**: 
  1. **GamingComputerBuilder**: Configura una computadora para gaming
  2. **OfficeComputerBuilder**: Configura una computadora para oficina
- **Director (opcional)**: Puede definir el orden de construcción de los componentes

### Características de los Builders
1. **Gaming Computer**: Optimizado para rendimiento y gráficos de alto nivel
2. **Office Computer**: Diseñado para productividad y tareas de oficina

## Estructura del Proyecto
```
builder-pattern/
│
├── src/
│   ├── builders/
│   │   ├── ComputerBuilder.js
│   │   ├── GamingComputerBuilder.js
│   │   ├── OfficeComputerBuilder.js
│   │
│   ├── models/
│   |    └── Computer.js
│   │
|   └── index.js
└── package.json
```