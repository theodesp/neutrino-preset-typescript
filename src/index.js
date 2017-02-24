
'use strict';

const web = require('neutrino-preset-web');
const merge = require('deepmerge');
const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const SRC = path.join(CWD, 'src');
const TS_LOADER = require.resolve('ts-loader');
const MODULES = path.join(__dirname, '../node_modules');

module.exports = neutrino => {
  web(neutrino); // Start with neutrino-preset-web

  const { config } = neutrino; // Maps to basic webpack config options

  // Replace index.js with index.ts
  config
    .entry('index')
    .clear()
    .add(path.join(SRC, 'index.ts'))
    .end()

  // Typescript compile rules
  config.module
    .rule('compile')
    .test(/\.tsx?$/)
    .loader('ts-loader', TS_LOADER);

  // Resolve
  config.resolve.modules.add(MODULES);
  config.resolve.extensions.add('.ts');
  config.resolveLoader.modules.add(MODULES);

}
