const config = require('../../global.rollup.config')

module.exports = config('src/index.ts', '../math-cjs/dist/');
