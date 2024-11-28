const readline = require('readline');
const WeatherData = require('./subjects/WeatherData');
const CurrentConditionsDisplay = require('./observers/CurrentConditionsDisplay');
const StatisticsDisplay = require('./observers/StatisticsDisplay');
const ForecastDisplay = require('./observers/ForecastDisplay');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const weatherData = new WeatherData();

// Create display observers
const currentDisplay = new CurrentConditionsDisplay();
const statisticsDisplay = new StatisticsDisplay();
const forecastDisplay = new ForecastDisplay();

// Register observers
weatherData
  .registerObserver(currentDisplay)
  .registerObserver(statisticsDisplay)
  .registerObserver(forecastDisplay);

function menu() {
  console.log('\n=== Sistema de Monitoreo de Clima ===');
  console.log('1. Ingresar nueva medición de clima');
  console.log('2. Eliminar un observador');
  console.log('3. Agregar un observador');
  console.log('4. Salir');
  
  rl.question('\nSeleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        inputWeatherMeasurements();
        break;
      case '2':
        removeObserver();
        break;
      case '3':
        addObserver();
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

function inputWeatherMeasurements() {
  rl.question('Ingrese temperatura (°C): ', (temp) => {
    rl.question('Ingrese humedad (%): ', (humidity) => {
      rl.question('Ingrese presión (hPa): ', (pressure) => {
        weatherData.measurementsChanged(
          parseFloat(temp), 
          parseFloat(humidity), 
          parseFloat(pressure)
        );
        menu();
      });
    });
  });
}

function removeObserver() {
  console.log('\n=== Observadores Actuales ===');
  console.log('1. CurrentConditionsDisplay');
  console.log('2. StatisticsDisplay');
  console.log('3. ForecastDisplay');
  
  rl.question('Seleccione un observador para eliminar: ', (choice) => {
    switch(choice) {
      case '1':
        weatherData.removeObserver(currentDisplay);
        console.log('CurrentConditionsDisplay eliminado.');
        break;
      case '2':
        weatherData.removeObserver(statisticsDisplay);
        console.log('StatisticsDisplay eliminado.');
        break;
      case '3':
        weatherData.removeObserver(forecastDisplay);
        console.log('ForecastDisplay eliminado.');
        break;
      default:
        console.log('Opción no válida.');
    }
    menu();
  });
}

function addObserver() {
  console.log('\n=== Observadores Disponibles ===');
  console.log('1. CurrentConditionsDisplay');
  console.log('2. StatisticsDisplay');
  console.log('3. ForecastDisplay');
  
  rl.question('Seleccione un observador para agregar: ', (choice) => {
    switch(choice) {
      case '1':
        weatherData.registerObserver(currentDisplay);
        console.log('CurrentConditionsDisplay agregado.');
        break;
      case '2':
        weatherData.registerObserver(statisticsDisplay);
        console.log('StatisticsDisplay agregado.');
        break;
      case '3':
        weatherData.registerObserver(forecastDisplay);
        console.log('ForecastDisplay agregado.');
        break;
      default:
        console.log('Opción no válida.');
    }
    menu();
  });
}

// Start menu
menu();