class AbstractDocumentExporter {
  // Método principal que define el algoritmo de exportación de documentos
  export(document) {
    this.validateDocument(document)
    const preparedContent = this.prepareContent(document)
    const formattedContent = this.formatContent(preparedContent)
    const exportedContent = this.writeExport(formattedContent)
    this.logExport(document)
    return exportedContent
  }

  // Valida el documento antes de exportar
  validateDocument(document) {
    if (!document || !document.content) {
      throw new Error('Documento inválido: Se requiere contenido')
    }
  }

  // Prepara el contenido para exportación (para ser sobreescrito)
  prepareContent(document) {
    return document.content
  }

  // Formatea el contenido (para ser sobreescrito)
  formatContent(content) {
    return content
  }

  // Método de exportación (debe ser implementado por subclases)
  writeExport(content) {
    throw new Error('La subclase debe implementar el método writeExport()')
  }

  // Registra los detalles de la exportación
  logExport(document) {
    console.log(`Documento exportado: ${document.title || 'Sin título'}`)
  }
}

module.exports = AbstractDocumentExporter
