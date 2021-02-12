import { arrayRemoveItems } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest-cjs';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(arrayRemoveItems, [
		{
			parameters: [
				[1, 2, 3, 4, 5, 6],
				[2, 1, 1, 99, 6]
			],
			expected: [3, 4, 5]
		},
		{
			parameters: [
				[1, 2, 3, 4],
				[10, 20, 40, 50],
				(clone, item): number => clone.indexOf((item as number) / 10)
			],
			expected: [3]
		}
	]);
});
