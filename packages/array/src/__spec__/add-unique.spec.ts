import { arrayAddUnique } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(arrayAddUnique, [
		{
			parameters: [
				[1, 2, 3],
				[2, 2, 4, 1, 4, 5, 3, 99, 1, 99]
			],
			expected: [1, 2, 3, 4, 5, 99]
		},
		{
			parameters: [
				[1, 2, 3, 4],
				[10, 20, 40, 50],
				(clone, item): boolean => clone.indexOf((item as number) / 10) === -1
			],
			expected: [1, 2, 3, 4, 50]
		}
	]);
});
