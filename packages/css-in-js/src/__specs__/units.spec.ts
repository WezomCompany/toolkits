// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssUnitExtract, jssUnitLess, jssRem, jssEm, jssPercentage } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest-cjs';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssUnitExtract', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssUnitExtract, [
			{
				parameters: [jssRem(16, [32])],
				expected: 'rem'
			},
			{
				parameters: [jssEm(20, [32])],
				expected: 'em'
			},
			{
				parameters: ['15rem'],
				expected: 'rem'
			},
			{
				parameters: ['16em'],
				expected: 'em'
			},
			{
				parameters: ['56.3%'],
				expected: '%'
			},
			{
				parameters: [jssPercentage(9, 16)],
				expected: '%'
			},
			{
				parameters: ['20vw'],
				expected: 'vw'
			},
			{
				parameters: ['1s'],
				expected: 's'
			},
			{
				parameters: ['250ms'],
				expected: 'ms'
			},
			{
				parameters: [10],
				expected: ''
			},
			{
				parameters: ['XXX'],
				expected: ''
			}
		]);
	});
});

describe('jssUnitLess', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssUnitLess, [
			{
				parameters: [jssRem(16, [32])],
				expected: 2
			},
			{
				parameters: [jssEm(20, [32])],
				expected: 1.6
			},
			{
				parameters: ['15rem'],
				expected: 15
			},
			{
				parameters: ['16em'],
				expected: 16
			},
			{
				parameters: ['56.3%'],
				expected: 56.3
			},
			{
				parameters: [jssPercentage(9, 16)],
				expected: 56.25
			},
			{
				parameters: ['20vw'],
				expected: 20
			},
			{
				parameters: ['1s'],
				expected: 1
			},
			{
				parameters: ['250ms'],
				expected: 250
			},
			{
				parameters: ['XXXXX'],
				expected: NaN
			}
		]);
	});
});
