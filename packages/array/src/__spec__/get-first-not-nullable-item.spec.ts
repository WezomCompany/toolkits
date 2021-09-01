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
