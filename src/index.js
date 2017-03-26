'use strict';

const path = require('path');

const CWD = process.cwd();
const SRC = path.join(CWD, 'src');
const TS_LOADER = require.resolve('awesome-typescript-loader');
const copy = require('neutrino-middleware-copy');

module.exports = neutrino => {
  const { config } = neutrino; // Maps to basic webpack config options

  if (process.env.NODE_ENV !== 'development') {
    neutrino.use(copy, {
      patterns: [{ context: neutrino.options.source, from: '**/*' }],
      options: { ignore: ['*.ts*'] }
    });
  }

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
      .use('ts')
        .loader(TS_LOADER)
        .options({
          jsx: 'react'
        });

  // Resolve
  config.resolve.extensions.add('.ts');
  config.resolve.extensions.add('.tsx');
};
