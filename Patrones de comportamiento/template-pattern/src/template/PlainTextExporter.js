// src/template/PlainTextExporter.js
const AbstractDocumentExporter = require('./AbstractDocumentExporter')

class PlainTextExporter extends AbstractDocumentExporter {
  /**
   * Write Plain Text export
   * @param {string} content - Formatted content to export
   * @returns {string} Exported Plain Text content
   */
  writeExport(content) {
    // Simulate Plain Text export
    return content
  }
}

module.exports = PlainTextExporter
