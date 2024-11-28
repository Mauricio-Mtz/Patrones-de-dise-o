const readline = require('readline');
const Car = require('./classes/products/Car');
const Motorcycle = require('./classes/products/Motorcycle');
const GPS = require('./classes/decorators/GPS');
const Insurance = require('./classes/decorators/Insurance');
const BabySeat = require('./classes/decorators/BabySeat');
const AdditionalDriver = require('./classes/decorators/AdditionalDriver');

// Configurar readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menú principal
function menu() {
  console.log('\n=== Alquiler de Vehículos ===');
  console.log('1. Alquilar un auto');
  console.log('2. Alquilar una motocicleta');
  console.log('3. Salir');
  rl.question('\nSeleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        configurarVehiculo(new Car());
        break;
      case '2':
        configurarVehiculo(new Motorcycle());
        break;
      case '3':
        rl.close();
        break;
      default:
        console.log('Opción no válida.');
        menu();
        break;
    }
  });
}

// Configurar vehículo con decoradores
function configurarVehiculo(vehicle) {
  console.log(`\n=== Configurando ${vehicle.getDescription()} ===`);
  console.log('1. Añadir GPS ($5 por día)');
  console.log('2. Añadir Seguro adicional ($10 por día)');
  console.log('3. Añadir Asiento para bebé ($7 por día)');
  console.log('4. Añadir Conductor adicional ($15 por día)');
  console.log('5. Finalizar configuración');
  rl.question('\nSeleccione una opción: ', (opcion) => {
    switch (opcion) {
      case '1':
        configurarVehiculo(new GPS(vehicle));
        break;
      case '2':
        configurarVehiculo(new Insurance(vehicle));
        break;
      case '3':
        configurarVehiculo(new BabySeat(vehicle));
        break;
      case '4':
        configurarVehiculo(new AdditionalDriver(vehicle));
        break;
      case '5':
        console.log('\nVehículo configurado:');
        console.log(vehicle.getDescription());
        console.log('Costo total por día:', vehicle.cost());
        menu();
        break;
      default:
        console.log('Opción no válida.');
        configurarVehiculo(vehicle);
        break;
    }
  });
}

// Ejecutar el menú principal
menu();
