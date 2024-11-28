const Phone = require('../models/Phone');
const Accessory = require('../models/Accessory');

class SamsungFactory {
  createPhone(memory, price) {
    const phone = new Phone('Samsung', memory, price);
    phone.addAccessory(new Accessory('Cargador Samsung'));
    return phone;
  }
}

module.exports = SamsungFactory;