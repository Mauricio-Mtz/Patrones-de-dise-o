# Singleton Pattern for Drinks Management

## Descripción General
Este proyecto demuestra el patrón de diseño Singleton utilizando un Sistema CRUD para la gestión de bebidas. El sistema permite crear, leer, actualizar y eliminar bebidas con una única instancia de gestor.

## Patrón de Diseño: Singleton
El patrón Singleton permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.

### Componentes Principales
- **BebidaManager**: Clase Singleton que gestiona las operaciones de bebidas
- **Categorías de Bebidas**:
  - Refrescos
  - Lácteos
  - Naturales
  - Electrolitos

### Características del Singleton
1. **Instancia Única**: Garantiza que solo exista una instancia del gestor de bebidas
2. **Acceso Global**: Proporciona un punto de acceso global a la instancia
3. **Control de Concurrencia**: Previene la creación de múltiples instancias

## Estructura del Proyecto
```
adapter-pattern/
│
├── src/
│   ├── database/
│   │   └── bebidas.js
│   ├── BebidaManager
|   └── index.js
└── package.json
```