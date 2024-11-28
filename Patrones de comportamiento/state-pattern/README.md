# State Pattern for Athlete State Management

## Descripción General
Este proyecto demuestra el patrón de diseño Estado gestionando los diferentes estados del ciclo de entrenamiento y competición de un atleta.

## Patrón de Diseño: Estado
El patrón Estado permite que un objeto altere su comportamiento cuando cambia su estado interno. En este ejemplo, las capacidades y acciones de un atleta cambian según su estado actual.

### Componentes Principales
- **Estados**:
  1. **TrainingState**: Representa un atleta en modo de entrenamiento
  2. **RestState**: Representa un atleta en modo de recuperación
  3. **CompetitionState**: Representa un atleta durante una competición

## Estructura del Proyecto
```
state-pattern/
│
├── src/
│   ├── states/
│   │   ├── AthleteState.js
│   │   ├── TrainingState.js
│   │   ├── RestState.js
│   │   └── CompetitionState.js
│   │
│   ├── context/
│   │   └── Athlete.js
│   │
│   └── index.js
└── package.json
```