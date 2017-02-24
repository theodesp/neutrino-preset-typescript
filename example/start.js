const Neutrino = require('neutrino');
const api = new Neutrino(['../']);

api
  .start()
  .then(() => console.log('Exiting!'));