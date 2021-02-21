import { arrayFilterNullable } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(arrayFilterNullable, [
		{
			parameters: [[1, null, 2, undefined, 3, false, 0]],
			expected: [1, 2, 3, false, 0]
		},
		{
			parameters: [null],
			expected: []
		},
		{
			parameters: [],
			expected: []
		},
		{
			parameters: [undefined],
			expected: []
		}
	]);
});
