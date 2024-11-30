const AbstractDocumentExporter = require('./AbstractDocumentExporter')

class MarkdownExporter extends AbstractDocumentExporter {
  // Prepara el contenido normalizando saltos de línea
  prepareContent(document) {
    return document.content.replace(/\r\n/g, '\n').trim()
  }

  // Formatea el contenido con estilo Markdown
  formatContent(content) {
    const lines = content.split('\n')
    const formattedLines = lines.map((line) => {
      if (line === lines[0]) {
        return `# ${line}`
      }
      return line
    })
    return formattedLines.join('\n')
  }

  // Exporta el contenido en formato Markdown
  writeExport(content) {
    return content
  }

  // Registra detalles específicos de la exportación Markdown
  logExport(document) {
    console.log(
      `Exportación Markdown: ${document.title || 'Sin título'} (${
        document.content.split('\n').length
      } líneas)`
    )
  }
}

module.exports = MarkdownExporter
