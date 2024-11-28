// src/template/MarkdownExporter.js
const AbstractDocumentExporter = require('./AbstractDocumentExporter')

class MarkdownExporter extends AbstractDocumentExporter {
  /**
   * Prepare content for Markdown export
   * @param {Object} document - Document to prepare
   * @returns {string} Prepared content
   */
  prepareContent(document) {
    // Normalize line breaks and trim
    return document.content.replace(/\r\n/g, '\n').trim()
  }

  /**
   * Format content for Markdown
   * @param {string} content - Content to format
   * @returns {string} Formatted content
   */
  formatContent(content) {
    // Add Markdown-specific formatting
    const lines = content.split('\n')
    const formattedLines = lines.map((line) => {
      // Add header if first line
      if (line === lines[0]) {
        return `# ${line}`
      }
      return line
    })
    return formattedLines.join('\n')
  }

  /**
   * Write Markdown export
   * @param {string} content - Formatted content to export
   * @returns {string} Exported Markdown content
   */
  writeExport(content) {
    // Simulate Markdown export
    return content
  }

  /**
   * Override log method with Markdown-specific logging
   * @param {Object} document - Exported document
   */
  logExport(document) {
    console.log(
      `Markdown Export: ${document.title || 'Untitled'} (${
        document.content.split('\n').length
      } lines)`
    )
  }
}

module.exports = MarkdownExporter
