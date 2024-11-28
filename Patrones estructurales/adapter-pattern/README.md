# Adapter Pattern for Subjects Management

## Descripción General
Este proyecto demuestra el patrón de diseño Adapter utilizando un Sistema para la Gestión de Materias Escolares. El sistema permite crear nuevas materias o migrarlas desde una API externa donde los valores son diferentes, ahí es donde entra el adaptador.

## Patrón de Diseño: Adapter
El patrón Adapter permite la colaboración entre objetos con interfaces incompatibles.

### Componentes Principales
- **Subject (Materia)**: La clase que representa una materia escolar
- **SubjectAdapter**: Adapta los datos de una API externa al formato interno del sistema
- **ThirdPartySubjectApi**: Representa la API externa con formato de datos diferente
- **SubjectList**: Gestiona la lista de materias en el sistema

### Características de los Adaptadores
1. **Adaptación de Datos**: Convierte formatos de datos entre sistemas
2. **Flexibilidad de Integración**: Permite agregar materias de fuentes externas sin modificar el sistema existente

## Estructura del Proyecto
```
adapter-pattern/
│
├── src/
│   ├── database/
│   │   └── phones.json
│   │
│   ├── classes/
│   │   ├── Subject.js
│   │   ├── SubjectAdapter.js
│   │   ├── SubjectList.js
│   │   └── ThirdPartySubjectApi.js
│   │
|   └── index.js
└── package.json
```