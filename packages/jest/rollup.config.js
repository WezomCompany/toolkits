const config = require('../../global.rollup.config')

module.exports = config('src/index.ts', '../jest-cjs/dist/');
