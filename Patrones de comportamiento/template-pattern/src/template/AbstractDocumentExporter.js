// src/template/AbstractDocumentExporter.js
class AbstractDocumentExporter {
  /**
   * Template method defining the algorithm for document export
   * @param {Object} document - Document to be exported
   * @returns {string} Exported document content
   */
  export(document) {
    this.validateDocument(document)
    const preparedContent = this.prepareContent(document)
    const formattedContent = this.formatContent(preparedContent)
    const exportedContent = this.writeExport(formattedContent)
    this.logExport(document)
    return exportedContent
  }

  /**
   * Validate document before export (must be implemented by subclasses)
   * @param {Object} document - Document to validate
   * @throws {Error} If document is invalid
   */
  validateDocument(document) {
    if (!document || !document.content) {
      throw new Error('Invalid document: Content is required')
    }
  }

  /**
   * Prepare content for export (to be overridden by subclasses)
   * @param {Object} document - Document to prepare
   * @returns {string} Prepared content
   */
  prepareContent(document) {
    return document.content
  }

  /**
   * Format content (to be overridden by subclasses)
   * @param {string} content - Content to format
   * @returns {string} Formatted content
   */
  formatContent(content) {
    return content
  }

  /**
   * Write export (to be overridden by subclasses)
   * @param {string} content - Formatted content to export
   * @returns {string} Exported content
   */
  writeExport(content) {
    throw new Error('Subclass must implement abstract method writeExport()')
  }

  /**
   * Log export details (optional hook method)
   * @param {Object} document - Exported document
   */
  logExport(document) {
    console.log(`Document exported: ${document.title || 'Untitled'}`)
  }
}

module.exports = AbstractDocumentExporter
