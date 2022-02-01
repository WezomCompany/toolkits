import { arrayGetFirstNotNullableItem } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	describe('default', () => {
		jestFunctionSignatureTest(arrayGetFirstNotNullableItem, [
			{
				parameters: [[1, null, 2, undefined, 3, false, 0]],
				expected: 1
			},
			{
				parameters: [[null, null, undefined, 3, false, 0]],
				expected: 3
			},
			{
				parameters: [null],
				expected: undefined
			},
			{
				parameters: [[null, undefined, null]],
				expected: undefined
			}
		]);
	});

	describe('strictZeroIndex', () => {
		jestFunctionSignatureTest(arrayGetFirstNotNullableItem, [
			{
				parameters: [[1, null, 2, undefined, 3, false, 0], true],
				expected: 1
			},
			{
				parameters: [[null, null, undefined, 3, false, 0], true],
				expected: undefined
			}
		]);
	});
});

interface A {
	x: string;
	y: string;
}
type B = Partial<A>;

describe('Custom predicate', () => {
	test('Find A', () => {
		// must find on 2 index                ✕     ✕           ✔︎                   ✕
		const data: (A | B | null)[] | null = [
			null,
			{ x: '1' },
			{ x: '3', y: '4' },
			{ y: '2' }
		];
		const result = arrayGetFirstNotNullableItem(
			data,
			false,
			(item): item is A => item != null && 'y' in item
		);
		expect(result).toStrictEqual({ x: '3', y: '4' });
	});
	test('Find A. Strict Mode #1', () => {
		// strict: check only 0 index          ✕     ✕           ✔︎                   ✕
		const data: (A | B | null)[] | null = [
			null,
			{ x: '1' },
			{ x: '3', y: '4' },
			{ y: '2' }
		];
		const result = arrayGetFirstNotNullableItem(
			data,
			true,
			(item): item is A => item != null && 'y' in item
		);
		expect(result).toBeUndefined();
	});

	test('Find A. Strict Mode #2', () => {
		// strict: check only 0 index          ✕           ✕      ✔︎                   ✕
		const data: (A | B | null)[] | null = [
			{ x: '1' },
			null,
			{ x: '3', y: '4' },
			{ y: '2' }
		];
		const result = arrayGetFirstNotNullableItem(
			data,
			true,
			(item): item is A => item != null && 'y' in item
		);
		expect(result).toBeUndefined();
	});
});
