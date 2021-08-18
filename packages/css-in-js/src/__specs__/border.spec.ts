// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { jssBorder } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('jssBorder', () => {
	describe('Function signature should match specification', () => {
		const myColorVar = '#f00';
		jestFunctionSignatureTest(jssBorder, [
			{ parameters: [2], expected: '2px solid' },
			{ parameters: ['0.25rem'], expected: '0.25rem solid' },
			{ parameters: [3, 'double'], expected: '3px double' },
			{ parameters: [1, 'solid', myColorVar], expected: '1px solid #f00' }
		]);
	});
});
