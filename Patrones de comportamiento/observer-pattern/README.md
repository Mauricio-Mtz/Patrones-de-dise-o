# Observer Pattern for Weather Monitoring System

## Descripción General
Este proyecto demuestra el patrón de diseño Observador utilizando un Sistema de Monitoreo del Clima. El sistema permite que múltiples tipos de pantallas se suscriban y reciban actualizaciones climáticas de forma dinámica.

## Patrón de Diseño: Observador
El patrón Observador define una dependencia de uno a muchos entre objetos de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente.

### Componentes Principales
- **Sujeto (WeatherData)**: Mantiene una lista de observadores y proporciona métodos para registrar, eliminar y notificar observadores.
- **Observadores (Displays)**: Implementan una interfaz común y reciben actualizaciones del sujeto.

### Observadores Implementados
1. **CurrentConditionsDisplay**: Muestra temperatura, humedad y presión actual.
2. **StatisticsDisplay**: Calcula y muestra estadísticas de temperatura.
3. **ForecastDisplay**: Proporciona una tendencia simple del pronóstico del tiempo.

## Estructura del Proyecto
```
observer-pattern/
│
├── src/
│   ├── observers/
│   │   ├── DisplayInterface.js
│   │   ├── CurrentConditionsDisplay.js
│   │   ├── StatisticsDisplay.js
│   │   └── ForecastDisplay.js
│   │
│   ├── subject/
│   |    └── WeatherData.js
│   │
|   └── index.js
└── package.json
```