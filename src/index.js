
'use strict';

const web = require('neutrino-preset-web');
const merge = require('deepmerge');
const path = require('path');
const webpack = require('webpack');

const MODULES = path.join(__dirname, '../node_modules');

module.exports = neutrino => {
  console.log(neutrino);
}
