import { mathRound } from '../index';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest-cjs';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(mathRound, [
		{
			parameters: [(9 / 16) * 100],
			expected: 56
		},
		{
			parameters: [(9 / 16) * 100, -1],
			expected: 56.3
		},
		{
			parameters: [(9 / 16) * 100, -2],
			expected: 56.25
		},
		{
			parameters: [(9 / 16) * 100, 1],
			expected: 60
		},
		{
			parameters: [(9 / 16) * 100, 2],
			expected: 100
		},
		{
			parameters: [4e4],
			expected: 40000
		},
		{
			parameters: [4e4, -2],
			expected: 40000
		},
		{
			parameters: [4e4, 2],
			expected: 40000
		},
		{
			parameters: [4e100],
			expected: 4e100
		},
		{
			parameters: [4e100, -2],
			expected: 4e100
		},
		{
			parameters: [4e100, 2],
			expected: 4e100
		},
		{
			parameters: [44e100],
			expected: 4.4e101
		},
		{
			parameters: [44e100, -2],
			expected: 4.4e101
		},
		{
			parameters: [44e100, 2],
			expected: 4.4e101
		}
	]);
});
