const Neutrino = require('neutrino');
const api = new Neutrino(['../']);

console.log(api);

api
  .build()
  .then(() => console.log('Exiting!'));
