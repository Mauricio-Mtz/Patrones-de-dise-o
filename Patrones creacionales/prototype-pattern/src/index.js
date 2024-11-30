const readline = require('readline');
const CharacterRegistry = require('./utils/CharacterRegistry');
const WarriorCharacter = require('./prototypes/WarriorCharacter');
const MageCharacter = require('./prototypes/MageCharacter');
const ArcherCharacter = require('./prototypes/ArcherCharacter');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Crear registro de personajes
const characterRegistry = new CharacterRegistry();

// Registrar prototipos iniciales
characterRegistry
  .register('guerrero', new WarriorCharacter('Prototipo Guerrero'))
  .register('mago', new MageCharacter('Prototipo Mago'))
  .register('arquero', new ArcherCharacter('Prototipo Arquero'));

const characters = [];

function menu() {
  console.log('\n=== Sistema de Personajes de Videojuego ===');
  console.log('1. Clonar personaje desde prototipo');
  console.log('2. Personalizar y clonar personaje');
  console.log('3. Ver personajes creados');
  console.log('4. Listar prototipos disponibles');
  console.log('5. Salir');
  
  rl.question('\nSeleccione una opción: ', (option) => {
    switch (option) {
      case '1':
        cloneCharacterFromPrototype();
        break;
      case '2':
        customizeAndCloneCharacter();
        break;
      case '3':
        listCharacters();
        break;
      case '4':
        listPrototypes();
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

function cloneCharacterFromPrototype() {
  rl.question('Seleccione un prototipo (guerrero/mago/arquero): ', (type) => {
    try {
      const clonedCharacter = characterRegistry.clone(type);
      rl.question('Ingrese un nombre para el personaje clonado: ', (name) => {
        clonedCharacter.name = name;
        characters.push(clonedCharacter);
        console.log('Personaje clonado exitosamente:');
        console.log(clonedCharacter.displayInfo());
        menu();
      });
    } catch (error) {
      console.log(error.message);
      menu();
    }
  });
}

function customizeAndCloneCharacter() {
  rl.question('Seleccione un prototipo (guerrero/mago/arquero): ', (type) => {
    try {
      const clonedCharacter = characterRegistry.clone(type);
      
      function askName() {
        rl.question('Ingrese un nombre para el personaje: ', (name) => {
          clonedCharacter.name = name;
          askHealth();
        });
      }

      function askHealth() {
        rl.question('Ingrese puntos de salud (0-200): ', (health) => {
          clonedCharacter.health = parseInt(health) || clonedCharacter.health;
          askWeapon();
        });
      }

      function askWeapon() {
        rl.question('Ingrese un arma adicional: ', (weapon) => {
          if (weapon) {
            clonedCharacter.addWeapon(weapon);
          }
          
          characters.push(clonedCharacter);
          console.log('Personaje personalizado y clonado:');
          console.log(clonedCharacter.displayInfo());
          menu();
        });
      }

      askName();
    } catch (error) {
      console.log(error.message);
      menu();
    }
  });
}

function listCharacters() {
  console.log('\n=== Personajes Creados ===');
  characters.forEach((character, index) => {
    console.log(`${index + 1}. ${character.displayInfo()}`);
  });
  menu();
}

function listPrototypes() {
  console.log('\n=== Prototipos Disponibles ===');
  console.log(characterRegistry.listRegisteredCharacters());
  menu();
}

// Iniciar menú
menu();