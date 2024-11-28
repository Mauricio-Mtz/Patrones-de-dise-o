// index.js
const readline = require('readline');
const DocumentExportRegistry = require('./utils/DocumentExportRegistry');
const PDFExporter = require('./template/PDFExporter');
const MarkdownExporter = require('./template/MarkdownExporter');
const PlainTextExporter = require('./template/PlainTextExporter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Create export registry
const exportRegistry = new DocumentExportRegistry();

// Register exporters
exportRegistry
  .register('pdf', new PDFExporter())
  .register('markdown', new MarkdownExporter())
  .register('plaintext', new PlainTextExporter());

const documents = [];

function menu() {
  console.log('\n=== Sistema de Exportación de Documentos ===');
  console.log('1. Crear nuevo documento');
  console.log('2. Exportar documento');
  console.log('3. Ver documentos');
  console.log('4. Listar tipos de exportación');
  console.log('5. Salir');
  
  rl.question('\nSeleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        createDocument();
        break;
      case '2':
        exportDocument();
        break;
      case '3':
        listDocuments();
        break;
      case '4':
        listExportTypes();
        break;
      case '5':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        menu();
        break;
    }
  });
}

function createDocument() {
  rl.question('Ingrese el título del documento: ', (title) => {
    rl.question('Ingrese el contenido del documento (presione Enter dos veces para terminar):\n', (content) => {
      const document = { title, content };
      documents.push(document);
      console.log('Documento creado exitosamente.');
      menu();
    });
  });
}

function exportDocument() {
  if (documents.length === 0) {
    console.log('No hay documentos para exportar.');
    return menu();
  }

  console.log('\n=== Documentos Disponibles ===');
  documents.forEach((doc, index) => {
    console.log(`${index + 1}. ${doc.title}`);
  });

  rl.question('Seleccione un documento para exportar: ', (docIndex) => {
    const document = documents[parseInt(docIndex) - 1];
    
    if (!document) {
      console.log('Documento no válido.');
      return menu();
    }

    console.log('\n=== Tipos de Exportación ===');
    console.log('1. PDF');
    console.log('2. Markdown');
    console.log('3. Plain Text');

    rl.question('Seleccione un tipo de exportación: ', (exportType) => {
      try {
        let type, exporter;
        switch (exportType) {
          case '1':
            type = 'pdf';
            break;
          case '2':
            type = 'markdown';
            break;
          case '3':
            type = 'plaintext';
            break;
          default:
            throw new Error('Tipo de exportación no válido');
        }

        exporter = exportRegistry.getExporter(type);
        const exportedContent = exporter.export(document);
        
        console.log('\n=== Contenido Exportado ===');
        console.log(exportedContent);
        menu();
      } catch (error) {
        console.log(error.message);
        menu();
      }
    });
  });
}

function listDocuments() {
  console.log('\n=== Documentos Creados ===');
  documents.forEach((doc, index) => {
    console.log(`${index + 1}. ${doc.title}`);
  });
  menu();
}

function listExportTypes() {
  console.log('\n=== Tipos de Exportación Disponibles ===');
  const types = exportRegistry.listExporterTypes();
  types.forEach(type => console.log(`- ${type.toUpperCase()}`));
  menu();
}

// Start menu
menu();