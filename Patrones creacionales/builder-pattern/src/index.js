const readline = require('readline');
const GamingComputerBuilder = require('./builders/GamingComputerBuilder');
const OfficeComputerBuilder = require('./builders/OfficeComputerBuilder');
const ComputerBuilder = require('./builders/ComputerBuilder');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lista para almacenar computadoras
const computers = [];

function menu() {
  console.log('\n=== Construcción de Computadoras ===');
  console.log('1. Crear computadora de gaming predeterminada');
  console.log('2. Crear computadora de oficina predeterminada');
  console.log('3. Configurar computadora personalizada');
  console.log('4. Ver computadoras');
  console.log('5. Salir');
  
  rl.question('\nSeleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        createGamingComputer();
        break;
      case '2':
        createOfficeComputer();
        break;
      case '3':
        createCustomComputer();
        break;
      case '4':
        listComputers();
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

function createGamingComputer() {
  const gamingBuilder = new GamingComputerBuilder();
  const gamingComputer = gamingBuilder.build();
  computers.push(gamingComputer);
  console.log('Computadora de gaming creada:');
  console.log(gamingComputer.toString());
  menu();
}

function createOfficeComputer() {
  const officeBuilder = new OfficeComputerBuilder();
  const officeComputer = officeBuilder.build();
  computers.push(officeComputer);
  console.log('Computadora de oficina creada:');
  console.log(officeComputer.toString());
  menu();
}

function createCustomComputer() {
  const customBuilder = new ComputerBuilder();
  
  function askCPU() {
    rl.question('Ingrese el CPU: ', (cpu) => {
      customBuilder.setCPU(cpu);
      askMotherboard();
    });
  }

  function askMotherboard() {
    rl.question('Ingrese la Motherboard: ', (motherboard) => {
      customBuilder.setMotherboard(motherboard);
      askRAM();
    });
  }

  function askRAM() {
    rl.question('Ingrese la RAM: ', (ram) => {
      customBuilder.setRAM(ram);
      askGPU();
    });
  }

  function askGPU() {
    rl.question('Ingrese la GPU: ', (gpu) => {
      customBuilder.setGPU(gpu);
      askStorage();
    });
  }

  function askStorage() {
    rl.question('Ingrese el almacenamiento: ', (storage) => {
      customBuilder.setStorage(storage);
      askPowerSupply();
    });
  }

  function askPowerSupply() {
    rl.question('Ingrese la fuente de poder: ', (powerSupply) => {
      customBuilder.setPowerSupply(powerSupply);
      const customComputer = customBuilder.build();
      computers.push(customComputer);
      console.log('Computadora personalizada creada:');
      console.log(customComputer.toString());
      menu();
    });
  }

  askCPU();
}

function listComputers() {
  console.log('\n=== Lista de Computadoras ===');
  computers.forEach((computer, index) => {
    console.log(`${index + 1}. ${computer}`);
  });
  menu();
}

// Iniciar menú
menu();