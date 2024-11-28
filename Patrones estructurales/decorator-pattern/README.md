# Decorator Pattern for Vehicles Management

## Descripción General
Este proyecto demuestra el patrón de diseño Decorator utilizando un Sistema para la Renta de Vehículos. El sistema permite gestionar la renta de vehículos, pudiendo obtener algún extra que pueda ser de utilidad en el vehículo seleccionado.

## Patrón de Diseño: Decorator
El patrón Decorator permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores especiales que contienen estas funcionalidades.

### Componentes Principales
- **Vehicle (Vehículo)**: La clase base abstracta que representa un vehículo
- **Concrete Vehicles**: 
  - **Car**: Implementación concreta de un vehículo tipo coche
  - **Motorcycle**: Implementación concreta de un vehículo tipo motocicleta
- **VehicleDecorator**: Clase base para los decoradores
- **Concrete Decorators**:
  - **GPS**: Añade servicio de navegación GPS
  - **BabySeat**: Añade silla para bebé
  - **AdditionalDriver**: Añade un conductor adicional
  - **Insurance**: Añade cobertura de seguro

### Características de los Decoradores
1. **Extensibilidad Dinámica**: Permite añadir nuevas funcionalidades sin modificar clases existentes
2. **Combinación Flexible**: Los decoradores se pueden combinar y apilar según las necesidades del cliente

## Estructura del Proyecto
```
adapter-pattern/
│
├── src/
│   ├── products/
│   │   ├── Vehicle.js
│   │   ├── Motorcycle.js
│   │   └── Car.js
│   │
│   ├── decorators/
│   │   ├── VehicleDecorator.js
│   │   ├── AdditionalDriver.js
│   │   ├── BabySeat.js
│   │   ├── GPS.js
│   │   └── Insurance.js
│   │
|   └── index.js
└── package.json
```