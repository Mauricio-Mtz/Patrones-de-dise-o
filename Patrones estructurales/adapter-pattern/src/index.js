const readline = require('readline');
const Subject = require('./classes/Subject');
const SubjectList = require('./classes/SubjectList');
const ThirdPartySubjectAPI = require('./classes/ThirdPartySubjectAPI');
const SubjectAdapter = require('./classes/SubjectAdapter');

// Inicializar el sistema
const subjectList = new SubjectList();
const thirdPartyAPI = new ThirdPartySubjectAPI();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menú principal
function menu() {
  console.log('\n=== Gestión de Materias ===');
  console.log('1. Añadir materia manualmente');
  console.log('2. Importar materias desde API externa');
  console.log('3. Ver materias');
  console.log('4. Salir');
  rl.question('\nSeleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        addManualSubject();
        break;
      case '2':
        importSubjects();
        break;
      case '3':
        listSubjects();
        break;
      case '4':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        menu();
        break;
    }
  });
}

// Opción 1: Añadir materia manualmente
function addManualSubject() {
  rl.question('Nombre de la materia: ', (name) => {
    rl.question('Código de la materia: ', (code) => {
      rl.question('Nombre del profesor: ', (teacher) => {
        const subject = new Subject(name, code, teacher);
        subjectList.addSubject(subject);
        console.log('Materia añadida correctamente.');
        menu();
      });
    });
  });
}

// Opción 2: Importar materias desde API externa
function importSubjects() {
  const externalSubjects = thirdPartyAPI.getSubjectData();
  externalSubjects.forEach((externalSubject) => {
    const adapter = new SubjectAdapter(externalSubject);
    subjectList.addSubject(adapter.toSubject());
  });
  console.log('Materias importadas desde API externa.');
  menu();
}

// Opción 3: Ver materias
function listSubjects() {
  const subjects = subjectList.getSubjects();
  console.log('\n=== Lista de Materias ===');
  subjects.forEach((subject, index) => {
    console.log(`${index + 1}. ${subject}`);
  });
  menu();
}

// Ejecutar menú principal
menu();
