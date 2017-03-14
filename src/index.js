'use strict';

const path = require('path');

const CWD = process.cwd();
const SRC = path.join(CWD, 'src');
const TS_LOADER = require.resolve('awesome-typescript-loader');

module.exports = neutrino => {
  const { config } = neutrino; // Maps to basic webpack config options

  // Replace index.js with index.ts
  config
    .entry('index')
    .clear()
    .add(path.join(SRC, 'index'))
    .end();

  // Typescript compile rules
  config.module
    .rule('compile')
    .test(/\.tsx?$/)
    .loader('ts-loader', TS_LOADER, {
      jsx: 'react'
    });

  // Resolve
  config.resolve.extensions.add('.ts');
  config.resolve.extensions.add('.tsx');
};
