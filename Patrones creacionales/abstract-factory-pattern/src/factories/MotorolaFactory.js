const Phone = require('../models/Phone');
const Accessory = require('../models/Accessory');

class MotorolaFactory {
  createPhone(memory, price) {
    const phone = new Phone('Motorola', memory, price);
    phone.addAccessory(new Accessory('Cargador Motorola'));
    return phone;
  }
}

module.exports = MotorolaFactory;