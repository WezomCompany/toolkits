// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssChangeJoiner } from '../index';
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
