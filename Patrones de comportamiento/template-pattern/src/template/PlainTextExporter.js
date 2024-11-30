const AbstractDocumentExporter = require('./AbstractDocumentExporter')

class PlainTextExporter extends AbstractDocumentExporter {
  // Exporta el contenido como texto plano sin formato
  writeExport(content) {
    return content
  }
}

module.exports = PlainTextExporter
