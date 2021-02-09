// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

import { fontFaceSrc } from '../index';

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

describe('Should return correct value', () => {
	const testCases: {
		parameters: Parameters<typeof fontFaceSrc>;
		expected: ReturnType<typeof fontFaceSrc>;
	}[] = [
		{
			parameters: ['/fonts/my.woff2', '/fonts/my.woff'],
			expected:
				"url('/fonts/my.woff2') format('woff2'), url('/fonts/my.woff') format('woff')"
		}
	];

	testCases.forEach(({ parameters, expected }, i) => {
		test(`Test case #${i + 1}`, () => {
			const result = fontFaceSrc(...parameters);
			expect(result).toStrictEqual(expected);
		});
	});
});
