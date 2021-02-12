import { mathSum } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(mathSum, [
		{
			parameters: [1, 3, 5],
			expected: 9
		},
		{
			parameters: [],
			expected: 0
		},
		{
			parameters: [1, -2],
			expected: -1
		},
		{
			parameters: [1.01, 1.02],
			expected: 2.03
		},
		{
			parameters: [1.001, 1.002],
			expected: 2.003
		},
		{
			parameters: [1.0001, 1.0002],
			expected: 2.0003
		}
	]);
});
