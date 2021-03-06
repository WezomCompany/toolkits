// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import {
	jssUnitExtract,
	jssUnitLess,
	jssRem,
	jssEm,
	jssPercentage,
	jssUnitRevertSign
} from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssUnitExtract', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssUnitExtract, [
			{
				parameters: [jssRem(32)],
				expected: 'rem'
			},
			{
				parameters: [jssEm(20, 32)],
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
				parameters: [jssRem(32)],
				expected: 2
			},
			{
				parameters: [jssEm(20, 32)],
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

describe('jssUnitRevertSign', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssUnitRevertSign, [
			{
				parameters: [-20],
				expected: 20
			},
			{
				parameters: [20],
				expected: -20
			},
			{
				parameters: ['3rem'],
				expected: '-3rem'
			},
			{
				parameters: ['-3rem'],
				expected: '3rem'
			},
			{
				parameters: ['56.3%'],
				expected: '-56.3%'
			},
			{
				parameters: ['-4px 4px'],
				expected: '4px -4px'
			},
			{
				parameters: [jssEm(16, 64, -64)],
				expected: '-4em 4em'
			},
			{
				parameters: ['-4px, 4px'],
				expected: '4px, -4px'
			},
			{
				parameters: ['-4px, 4px 4px, -5px, -6 -7 -8, 99.9%'],
				expected: '4px, -4px -4px, 5px, 6 7 8, -99.9%'
			}
		]);
	});
});
