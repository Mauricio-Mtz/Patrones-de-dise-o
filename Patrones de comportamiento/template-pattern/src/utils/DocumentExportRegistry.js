class DocumentExportRegistry {
  // Inicializa un objeto vacío para almacenar exportadores
  constructor() {
    this.exporters = {}
  }

  // Registra un nuevo exportador con un tipo específico
  register(type, exporter) {
    this.exporters[type] = exporter
    return this
  }

  // Obtiene un exportador por su tipo
  getExporter(type) {
    const exporter = this.exporters[type]
    if (!exporter) {
      throw new Error(`No se encontró exportador para el tipo: ${type}`)
    }
    return exporter
  }

  // Lista los tipos de exportadores registrados
  listExporterTypes() {
    return Object.keys(this.exporters)
  }
}

module.exports = DocumentExportRegistry
