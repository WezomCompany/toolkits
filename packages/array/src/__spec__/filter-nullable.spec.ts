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

interface A {
	x: string;
}

interface B {
	x: string;
	y: string;
}

interface C {
	x: string;
	y: number;
}
type D = Partial<C>;

describe('Custom predicate', () => {
	test('A to B', () => {
		const data: (A | B | null)[] | null = [
			{ x: '1' },
			{ x: '2' },
			null,
			{ x: '3', y: '4' }
		];
		const result = arrayFilterNullable(
			data,
			(item): item is B => item != null && 'y' in item
		);
		expect(result).toStrictEqual([{ x: '3', y: '4' }]);
	});

	test('C to D', () => {
		const data: (C | D | null)[] | null = [
			{ y: 1, x: '2' },
			null,
			{ x: '2' },
			{ y: 4 }
		];
		const result = arrayFilterNullable(
			data,
			(item): item is D => item != null && item.y != null && item.x != null
		);
		expect(result).toStrictEqual([{ y: 1, x: '2' }]);
	});
});
