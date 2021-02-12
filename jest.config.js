// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

const tsConfig = require('./packages/css-in-js/tsconfig.json');
const globalConfig = require('./globa.jest.config');

// -----------------------------------------------------------------------------
// Jest config
// -----------------------------------------------------------------------------

module.exports = globalConfig({ compilerOptions: tsConfig.compilerOptions });
