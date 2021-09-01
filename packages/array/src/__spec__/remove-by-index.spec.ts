import { arrayRemoveByIndex } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(arrayRemoveByIndex, [
		{
			parameters: [['A', 'B', 'C'], 1],
			expected: ['A', 'C']
		},
		{
			parameters: [['A', 'B', 'C', 'D', 'E'], 1, 3],
			expected: ['A', 'E']
		}
	]);
});
