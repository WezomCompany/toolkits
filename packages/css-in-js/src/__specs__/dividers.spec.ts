// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssChangeJoiner, jssSplitAndChangeJoiner } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssChangeJoiner', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssChangeJoiner, [
			{
				parameters: ['0 4px auto'],
				expected: '0, 4px, auto'
			},
			{
				parameters: ['0 4px auto', '~*~'],
				expected: '0~*~4px~*~auto'
			}
		]);
	});
});

describe('jssSplitAndChangeJoiner', () => {
	describe('Function signature should match specification', () => {
		jestFunctionSignatureTest(jssSplitAndChangeJoiner, [
			{
				parameters: ['0 4px auto', ' ', ', '],
				expected: '0, 4px, auto'
			},
			{
				parameters: ['0 4px auto', ' ', '~*~'],
				expected: '0~*~4px~*~auto'
			}
		]);
	});
});
