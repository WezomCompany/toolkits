// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssVar } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssVar', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssVar, [
			{
				parameters: ['--top'],
				expected: 'var(--top)'
			},
			{
				parameters: ['--top', 10],
				expected: 'var(--top, 10)'
			},
			{
				parameters: ['--top', '10px'],
				expected: 'var(--top, 10px)'
			},
			{
				parameters: ['--color', 'red'],
				expected: 'var(--color, red)'
			},
			{
				parameters: ['top', 10],
				expected: 'var(--top, 10)'
			},
			{
				parameters: ['top', '10px'],
				expected: 'var(--top, 10px)'
			},
			{
				parameters: ['color', 'red'],
				expected: 'var(--color, red)'
			}
		]);
	});
});
