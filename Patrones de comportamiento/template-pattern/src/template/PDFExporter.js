const AbstractDocumentExporter = require('./AbstractDocumentExporter')

class PDFExporter extends AbstractDocumentExporter {
  // Validación adicional específica para exportación PDF
  validateDocument(document) {
    super.validateDocument(document)
    if (document.content.length > 5000) {
      throw new Error(
        'Exportación PDF soporta documentos hasta 5000 caracteres'
      )
    }
  }

  // Prepara el contenido para exportación PDF
  prepareContent(document) {
    // Simulación de preparación de contenido para PDF
    return document.content.replace(/\n/g, ' ').trim()
  }

  // Formatea el contenido para PDF
  formatContent(content) {
    return `[ENCABEZADO PDF]\n${content}\n[PIE DE PÁGINA PDF]`
  }

  // Exporta el contenido en formato PDF
  writeExport(content) {
    return content
  }

  // Registra detalles específicos de la exportación PDF
  logExport(document) {
    console.log(
      `Exportación PDF: ${document.title || 'Sin título'} (${
        document.content.length
      } caracteres)`
    )
  }
}

module.exports = PDFExporter
