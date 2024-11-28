// src/utils/DocumentExportRegistry.js
class DocumentExportRegistry {
  constructor() {
    this.exporters = {}
  }

  /**
   * Register a new exporter
   * @param {string} type - Export type
   * @param {Object} exporter - Exporter instance
   * @returns {DocumentExportRegistry} Current instance for chaining
   */
  register(type, exporter) {
    this.exporters[type] = exporter
    return this
  }

  /**
   * Get an exporter by type
   * @param {string} type - Export type
   * @returns {Object} Requested exporter
   */
  getExporter(type) {
    const exporter = this.exporters[type]
    if (!exporter) {
      throw new Error(`No exporter found for type: ${type}`)
    }
    return exporter
  }

  /**
   * List registered exporter types
   * @returns {string[]} List of registered exporter types
   */
  listExporterTypes() {
    return Object.keys(this.exporters)
  }
}

module.exports = DocumentExportRegistry
