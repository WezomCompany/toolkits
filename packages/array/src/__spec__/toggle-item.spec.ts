import { arrayToggleItem } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(arrayToggleItem, [
		{
			parameters: [[1, 2, 3], 9],
			expected: [1, 2, 3, 9]
		},
		{
			parameters: [[1, 2, 3, 9], 2],
			expected: [1, 3, 9]
		},
		{
			parameters: [
				[{ x: 1 }, { x: 2 }, { x: 3 }],
				{ x: 2 },
				(array: any[], item: any): number =>
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					array.findIndex((el) => el.x === item.x)
			],
			expected: [{ x: 1 }, { x: 3 }]
		}
	]);
});
