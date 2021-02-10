// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssPercentage } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(jssPercentage, [
		{
			parameters: [720, 1280],
			expected: '56.25%'
		},
		{
			parameters: [9, 16],
			expected: '56.25%'
		},
		{
			parameters: [9, 16, true],
			expected: 56.25
		},
		{
			parameters: [9, 16, true, 1],
			expected: 56.3
		},
		{
			parameters: [9, 16, false, 1],
			expected: '56.3%'
		},
		{
			parameters: [9, 16, undefined, 1],
			expected: '56.3%'
		}
	]);
});
