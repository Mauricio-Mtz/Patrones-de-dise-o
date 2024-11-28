# Prototype Pattern for Character Management

## Descripción General
Este proyecto demuestra el patrón de diseño Prototype utilizando un Sistema de Creación de Personajes. El sistema permite crear personajes propios a partir de prototipos prediseñados, permitiendo gestionarlos y añadirles características.

## Patrón de Diseño: Prototype
El patrón Prototype permite crear nuevos objetos clonando un objeto existente, en lugar de crear nuevas instancias desde cero. Este método proporciona una forma de copiar objetos sin depender de sus clases concretas.

### Componentes Principales
- **Prototipo Base (CharacterPrototype)**: Define la interfaz para clonar personajes
- **Prototipos Concretos**: 
  1. **WarriorCharacter**: Prototipo de personaje guerrero
  2. **MageCharacter**: Prototipo de personaje mago
  3. **ArcherCharacter**: Prototipo de personaje arquero
- **Registro de Prototipos (CharacterRegistry)**: Gestiona y proporciona acceso a los prototipos existentes

### Características de los Personajes
1. **Guerrero**: Especializado en combate cuerpo a cuerpo
2. **Mago**: Experto en hechizos y magia
3. **Arquero**: Maestro de ataques a distancia

## Estructura del Proyecto
```
prototype-pattern/
│
├── src/
│   ├── prototypes/
│   │   ├── ArcherCharacter.js
│   │   ├── CharacterPrototype.js
│   │   ├── MageCharacter.js
│   │   ├── WarriorCharacter.js
│   │
│   ├── utils/
│   |    └── CharacterRegistry.js
│   │
|   └── index.js
└── package.json
```