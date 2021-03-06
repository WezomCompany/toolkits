// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';
import {
	jssConvertPixels,
	jssEm,
	jssRem,
	jssRemWithSize,
	jssSetPreDefinedRemSize
} from '../index';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssConvertPixels', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssConvertPixels, [
			{
				parameters: [16, [16], 'em', ' '],
				expected: '1em'
			},
			{
				parameters: [16, [16, 'auto'], 'em', ' '],
				expected: '1em auto'
			},
			{
				parameters: [16, [-8, 0], 'rem', ' '],
				expected: '-0.5rem 0'
			},
			{
				parameters: [16, [24, 32, 48], 'rem', ', '],
				expected: '1.5rem, 2rem, 3rem'
			},
			{
				parameters: [
					16,
					['inherit', 'inherit', 'revert', 'unset', 20],
					'rem',
					' '
				],
				expected: 'inherit inherit revert unset 1.25rem'
			}
		]);
	});
});

describe('jssEm', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssEm, [
			{
				parameters: [16, 16],
				expected: '1em'
			},
			{
				parameters: [16, 16, 'auto'],
				expected: '1em auto'
			},
			{
				parameters: [16, -8, 0],
				expected: '-0.5em 0'
			},
			{
				parameters: [16, 24, 32, 48],
				expected: '1.5em 2em 3em'
			},
			{
				parameters: [20, 30, 10, 45],
				expected: '1.5em 0.5em 2.25em'
			},
			{
				parameters: [20, 'inherit', 'inherit', 'revert', 'unset', 20],
				expected: 'inherit inherit revert unset 1em'
			}
		]);
	});
});

describe('jssRem', () => {
	describe('Function signature should match specification', () => {
		jssSetPreDefinedRemSize(16);
		jestFunctionSignatureTest(jssRem, [
			{
				parameters: [16],
				expected: '1rem'
			},
			{
				parameters: [16, 'auto'],
				expected: '1rem auto'
			},
			{
				parameters: [-8, 0],
				expected: '-0.5rem 0'
			},
			{
				parameters: [24, 32, 48],
				expected: '1.5rem 2rem 3rem'
			},
			{
				parameters: ['inherit', 'inherit', 'revert', 'unset', 20],
				expected: 'inherit inherit revert unset 1.25rem'
			}
		]);
	});
});

describe('jssRemWithSize', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssRemWithSize, [
			{
				parameters: [16, 16],
				expected: '1rem'
			},
			{
				parameters: [16, 16, 'auto'],
				expected: '1rem auto'
			},
			{
				parameters: [16, -8, 0],
				expected: '-0.5rem 0'
			},
			{
				parameters: [16, 24, 32, 48],
				expected: '1.5rem 2rem 3rem'
			},
			{
				parameters: [20, 30, 10, 45],
				expected: '1.5rem 0.5rem 2.25rem'
			},
			{
				parameters: [20, 'inherit', 'inherit', 'revert', 'unset', 20],
				expected: 'inherit inherit revert unset 1rem'
			}
		]);
	});
});
