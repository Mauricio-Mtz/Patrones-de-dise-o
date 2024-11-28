# Template Method Pattern for Document Export

## Descripción General
Este proyecto demuestra el patrón de diseño Método de Plantilla utilizando un Sistema de Exportación de Documentos. El sistema permite exportar documentos en diferentes formatos manteniendo un proceso de exportación consistente.

## Patrón de Diseño: Método de Plantilla
El patrón Método de Plantilla define el esqueleto de un algoritmo en una clase base, pero permite que las subclases sobrescriban pasos específicos del algoritmo sin cambiar su estructura.

### Componentes Principales
- **Clase Abstracta (AbstractDocumentExporter)**: Define el método de plantilla y métodos abstractos/hook.
- **Clases Concretas (PDFExporter, MarkdownExporter, PlainTextExporter)**: Implementan pasos específicos del proceso de exportación.

### Exportadores Implementados
1. **PDFExporter**: Exporta documentos con formato y validación específicos de PDF
2. **MarkdownExporter**: Exporta documentos con formato Markdown
3. **PlainTextExporter**: Exporta documentos en formato de texto plano

## Estructura del Proyecto
```
template-pattern/
│
├── src/
│   ├── template/
│   │   ├── AbstractDocumentExporter.js
│   │   ├── PDFExporter.js
│   │   ├── MarkdownExporter.js
│   │   └── PlainTextExporter.js
│   │
│   ├── utils/
│   │    └── DocumentExportRegistry.js
│   │
│   └── index.js
└── package.json
```